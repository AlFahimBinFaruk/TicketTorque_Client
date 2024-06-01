import React from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBBtn,
    MDBInput
} from 'mdb-react-ui-kit';

export default function SingleTicketCard() {
    return (
        <MDBCard className='mb-4' role="button">
            <MDBCardBody>
                <MDBCardTitle className='text-primary'>Saintmartin Hyundai (Robi Express)</MDBCardTitle>
                <MDBCardText className="mb-5">
                    <p>28, Sleeper Premium AC, AC</p>
                    <p className='mb-0'>
                        <small>
                            <b>Starting point</b>: Chittagong
                        </small>
                    </p>
                    <p className='mb-0'>
                        <small>
                            <b>Boarding point</b>: Dumpara bus station.
                        </small>
                    </p>
                    <p>
                        <small>
                            <b>Ending point</b>: Dhaka
                        </small>
                    </p>
                    <p className='mb-0'>
                        <small>
                            <b>Arrival Time</b>: 12:15 AM
                        </small>
                    </p>
                    <p>
                        <small>
                            <b>Departure Time</b>: 02:15 AM
                        </small>
                    </p>
                    <p>
                        <small>
                            <b>Seats Available</b>: 88
                        </small>
                    </p>

                    <p>
                        <small>
                            <b>Price</b>: 2344 Tk
                        </small>
                    </p>
                </MDBCardText>

                <div className="buying-form">
                    <MDBInput id="in1" type="number" label="Select ticket quantity" size="sm" className="mb-3"/>
                    <MDBBtn block size="sm" color="success">Continue</MDBBtn>
                </div>

            </MDBCardBody>
        </MDBCard>
    );
}