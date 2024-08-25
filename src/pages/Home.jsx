import React from 'react';
import {
    MDBCol,
    MDBRow,
    MDBInput,
    MDBBtn,
    MDBRadio
} from 'mdb-react-ui-kit';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
    useGetLocationListQuery,
    useGetVehicleListQuery
} from '../services/ticket_api';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

// Validation Schema
const validationSchema = Yup.object({
    vehicle_id: Yup.string().required('Please select a vehicle'),
    from_location_id: Yup.string().required('Please select a "From" location'),
    to_location_id: Yup.string().required('Please select a "To" location'),
});

export default function Home() {

    const navigate = useNavigate();

    const { data: locationDetails, isLoading: locationsLoading } = useGetLocationListQuery();
    const { data: vehicleDetails, isLoading: vehiclesLoading } = useGetVehicleListQuery();


    if (locationsLoading || vehiclesLoading) {
        return <div>Loading...</div>;
    }

    const initialValues = {
        vehicle_id: '',
        from_location_id: '',
        to_location_id: '',
    };




    const handleSearch = async (values, { setSubmitting }) => {
        const { vehicle_id, from_location_id, to_location_id } = values;

        navigate(`/ticket-list/${vehicle_id}/${from_location_id}/${to_location_id}`);
    };

    return (
        <div className="home w-50 m-auto my-5">
            <h5>Select Your Desired Criteria</h5>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSearch}
            >
                {({ values, setFieldValue, isSubmitting }) => (
                    <Form className='my-3'>
                        <p className='text-start'>
                            <small>Select Vehicle</small>
                        </p>
                        <div className="vehicle-list d-flex justify-content-between flex-wrap mb-3">
                            {vehicleDetails?.vehicles.map(vehicle => (
                                <MDBRadio
                                    key={vehicle.id}
                                    name='vehicle_id'
                                    value={vehicle.id}
                                    label={vehicle.name}
                                    onChange={() => setFieldValue('vehicle_id', vehicle.id)}
                                    checked={values.vehicle_id === vehicle.id}
                                />
                            ))}
                        </div>
                        <ErrorMessage name="vehicle_id" component="div" className="text-danger mb-3" />

                        <div className="mb-3">
                            <label htmlFor="fromLocation" className="form-label">From</label>
                            <Field
                                as="select"
                                name="from_location_id"
                                className="form-select"
                                id="fromLocation"
                            >
                                <option value="">Select From Location</option>
                                {locationDetails?.locations.map(loc => (
                                    <option key={loc.id} value={loc.id}>
                                        {loc.name}
                                    </option>
                                ))}
                            </Field>
                            <ErrorMessage name="from_location_id" component="div" className="text-danger mb-3" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="toLocation" className="form-label">To</label>
                            <Field
                                as="select"
                                name="to_location_id"
                                className="form-select"
                                id="toLocation"
                            >
                                <option value="">Select To Location</option>
                                {locationDetails?.locations.map(loc => (
                                    <option key={loc.id} value={loc.id}>
                                        {loc.name}
                                    </option>
                                ))}
                            </Field>
                            <ErrorMessage name="to_location_id" component="div" className="text-danger mb-3" />
                        </div>

                        <MDBBtn block size='sm' type="submit" disabled={isSubmitting}>
                            {isSubmitting ? 'Searching...' : 'Search'}
                        </MDBBtn>
                    </Form>
                )}
            </Formik>
        </div>
    );
}
