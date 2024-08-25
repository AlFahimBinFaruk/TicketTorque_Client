import React from 'react';
import { useParams } from "react-router-dom";
import SingleTicketCard from "../components/SingleTicketCard";
import { useGetTicketListQuery } from "../services/ticket_api";
import { usePlaceOrderMutation } from "../services/order_api";
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBBtn,
    MDBInput
} from 'mdb-react-ui-kit';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import formatDate from "../helpers/formatData";
import { toast } from 'react-toastify';

// Validation schema with Yup
const validationSchema = Yup.object({
    quantity: Yup.number()
        .required('Quantity is required')
        .positive('Quantity must be a positive number')
        .integer('Quantity must be an integer')
        .min(1, 'Minimum quantity is 1')
});

export default function TicketList() {
    const params = useParams();
    const vehicle_id = params.vehicle_id;
    const from_location_id = params.from_location_id;
    const to_location_id = params.to_location_id;

    const { data: details, isLoading, error } = useGetTicketListQuery({ vehicle_id, from_location_id, to_location_id });
    const [placeOrder] = usePlaceOrderMutation();

    if (isLoading) {
        return <>Loading..</>;
    }

    if (error) {
        return <>Ticket fetching error.</>;
    }

    // Handle form submission
    const handleSubmit = async (values, { resetForm }) => {
        const { quantity, ticketId } = values;
        try {
            await placeOrder({ ticket_id:ticketId, qty:quantity }).unwrap();
            // Handle successful order placement
            resetForm();
            toast.success("Order placed successfully");
        } catch (err) {
            console.error('Order placement error:', err);
            toast.error("some error occured");
        }
    };

    return (
        <div className="tickets w-50 m-auto my-5">
            <h6>Tickets under selected criteria</h6>
            <div className="my-5">
                {details?.results.length > 0 ? details.results.map((data, ind) => (
                    <MDBCard className='mb-4' key={ind}>
                        <Formik
                            initialValues={{ quantity: '', ticketId: data.id }}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                        >
                            {({ values, handleChange, handleBlur, setFieldValue }) => (
                                <Form>
                                    <MDBCardBody>
                                        <MDBCardTitle className='text-primary'>{data.name}</MDBCardTitle>
                                        <MDBCardText className="mb-5">
                                            <p>{data.category.name}</p>
                                            <p className='mb-0'>
                                                <small>
                                                    <b>Boarding point</b>: {data.boarding_point_name}
                                                </small>
                                            </p>
                                            <p>
                                                <small>
                                                    <b>Ending point</b>: {data.dropping_point_name}
                                                </small>
                                            </p>
                                            <p className='mb-0'>
                                                <small>
                                                    <b>Arrival Time</b>: {data.arrival_date}
                                                </small>
                                            </p>
                                            <p>
                                                <small>
                                                    <b>Departure Time</b>: {formatDate(data.departure_date)}
                                                </small>
                                            </p>
                                            <p>
                                                <small>
                                                    <b>Seats Available</b>: {data.qty}
                                                </small>
                                            </p>
                                            <p>
                                                <small>
                                                    <b>Price</b>: {data.price} Tk
                                                </small>
                                            </p>
                                        </MDBCardText>

                                        <div className="buying-form">
                                            <Field
                                                name="quantity"
                                                as={MDBInput}
                                                type="number"
                                                label="Select ticket quantity"
                                                size="sm"
                                                className="mb-3"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.quantity}
                                            />
                                            <ErrorMessage name="quantity" component="div" className="text-danger mb-3" />

                                            <MDBBtn type="submit" block size="sm" color="success">Place Order</MDBBtn>
                                        </div>
                                    </MDBCardBody>
                                </Form>
                            )}
                        </Formik>
                    </MDBCard>
                )) : <p>No data to show</p>}
            </div>
        </div>
    );
}
