import { MDBBtn, MDBCard, MDBInput, MDBCardBody, MDBCardTitle, MDBCardText } from "mdb-react-ui-kit";
import { useParams } from "react-router-dom";
import { useGetMyOrderDetailsQuery, useManageTranIdMutation } from "../services/order_api";
import formatDate from "../helpers/formatData";

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { toast } from "react-toastify";

// Validation schema with Yup
const validationSchema = Yup.object({
    transaction_id: Yup.string()
        .required('Transaction ID is required')
        .matches(/^[A-Za-z0-9]+$/, 'Transaction ID must be alphanumeric')
});


export default function OrderDetails() {
    const params = useParams();
    const order_id = params.order_id;

    const { data: details, isLoading, error } = useGetMyOrderDetailsQuery(order_id);
    const [manageTranId] = useManageTranIdMutation();


    const handleSubmit = async (values, { resetForm }) => {
        const { transaction_id } = values;
        try {
            await manageTranId({ order_id, transaction_id }).unwrap();

            resetForm();
            toast.success("Transaction id updated successfully");
        } catch (err) {
            console.error('Transaction verification error:', err);
            toast.error("Failed to update Transaction id.");
        }
    };



    if (isLoading) {
        return <>Loading..</>
    }

    if (error) {
        return <>Order fetching error</>
    }
    const data = details.ticket;
    // console.log("details => ", details);
    return (
        <div className="orderDetails w-50  m-auto my-5">
            <MDBCard className="mb-4">
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
                                <b>Purchased seats</b>: {details.qty}
                            </small>
                        </p>
                        <p>
                            <small>
                                <b>Single Seat Price</b>: {data.price} Tk
                            </small>
                        </p>
                        <p>
                            <small>
                                <b>Order status</b>: {details.order_status}
                            </small>
                        </p>
                        <p>
                            <small>
                                <b>Payment status</b>: {details.payment_status}
                            </small>
                        </p>
                        {details.transaction_id.length > 0 && <p>
                            <small>
                                <b>Transaction Id</b>: {details.transaction_id}
                            </small>
                        </p>}
                    </MDBCardText>

                </MDBCardBody>
            </MDBCard>

            <Formik
                initialValues={{ transaction_id: '' }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {() => (
                    <Form>
                        <h6>Payment details</h6>
                        <p><small>
                            <b className="text-danger">Please don't close this page!</b> to confirm your reservation of <b>{data.name}</b> of <b>{details.qty} tickets</b> please pay <b>Tk {details.qty * data.price}</b> for your ticket to our merchant number <b>01815203698</b> through bKash in the <b className="text-danger">next 30 minutes</b>.
                        </small></p>
                        <p>
                            <small>After paying please enter the transaction id received from bKash below:</small>
                        </p>

                        <Field
                            name="transaction_id"
                            as={MDBInput}
                            type="text"
                            label="Transaction Id"
                            size="sm"
                            className="mb-3"
                        />
                        <ErrorMessage name="transaction_id" component="div" className="text-danger mb-3" />

                        <MDBBtn type="submit" size="sm" block>Verify Transaction</MDBBtn>
                    </Form>
                )}
            </Formik>
        </div>
    )
}