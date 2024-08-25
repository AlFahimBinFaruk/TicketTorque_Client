import React from 'react';
import {
    MDBInput,
    MDBCol,
    MDBRow,
    MDBBtn
} from 'mdb-react-ui-kit';
import { useRegisterUserMutation } from '../services/user_api';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

// Define validation schema using Yup
const validationSchema = Yup.object({
    first_name: Yup.string().required('First name is required'),
    last_name: Yup.string().required('Last name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    phone: Yup.string().required('Phone number is required'),
    password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters long')
});

export default function Register() {
    const [registerUser] = useRegisterUserMutation();

    const handleSubmit = async (values, { resetForm }) => {

        try {
            const { first_name, last_name, email, phone, password } = values;
            const res = await registerUser({ first_name, last_name, email, phone, password }).unwrap();
            localStorage.setItem("token", res.token);
            toast.success('Registration successful');
            resetForm();
            window.location.assign("/");
        } catch (err) {
            console.error(err.data.msg);
            toast.error('Failed to register');
        }
    };

    return (
        <div className="vh-100 d-flex justify-content-center align-items-center">
            <MDBCol size="12" md="8" lg="4">
                <h6 className='text-center mb-3'>Register</h6>
                <Formik
                    initialValues={{
                        first_name: '',
                        last_name: '',
                        email: '',
                        phone: '',
                        password: ''
                    }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {() => (
                        <Form>
                            <MDBRow className='mb-4'>
                                <MDBCol>
                                    <Field
                                        as={MDBInput}
                                        id='form3Example1'
                                        name='first_name'
                                        label='First name'
                                        size='sm'
                                    />
                                    <ErrorMessage name='first_name' component='div' className='text-danger' />
                                </MDBCol>
                                <MDBCol>
                                    <Field
                                        as={MDBInput}
                                        id='form3Example2'
                                        name='last_name'
                                        label='Last name'
                                        size='sm'
                                    />
                                    <ErrorMessage name='last_name' component='div' className='text-danger' />
                                </MDBCol>
                            </MDBRow>
                            <Field
                                as={MDBInput}
                                className='mb-4'
                                type='email'
                                id='form3Example3'
                                name='email'
                                label='Email address'
                                size='sm'
                            />
                            <ErrorMessage name='email' component='div' className='text-danger' />

                            <Field
                                as={MDBInput}
                                className='mb-4'
                                type='text'
                                id='form3Example4'
                                name='phone'
                                label='Phone number'
                                size='sm'
                            />
                            <ErrorMessage name='phone' component='div' className='text-danger' />

                            <Field
                                as={MDBInput}
                                className='mb-4'
                                type='password'
                                id='form3Example5'
                                name='password'
                                label='Password'
                                size='sm'
                            />
                            <ErrorMessage name='password' component='div' className='text-danger' />

                            <MDBBtn type='submit' className='mb-4' block size='sm'>
                                Register
                            </MDBBtn>
                        </Form>
                    )}
                </Formik>
            </MDBCol>
        </div>
    );
}