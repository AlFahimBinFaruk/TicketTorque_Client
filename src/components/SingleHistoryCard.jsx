import React from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBBtn,
    MDBInput
} from 'mdb-react-ui-kit';

export default function SingleHistoryCard() {
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
                            <b>Seats Booked</b>: 88
                        </small>
                    </p>

                    <p>
                        <small>
                            <b>Total</b>: 2344 Tk
                        </small>
                    </p>
                    <p>
                        <small>
                            <b>Transaction id</b>: 4234jljldfdodd3
                        </small>
                    </p>
                    <p>
                        <small>
                            <b>Payment status</b>: Confirmed
                        </small>
                    </p>
                </MDBCardText>

                <MDBBtn block color="warning">Print Ticket</MDBBtn>



            </MDBCardBody>
        </MDBCard>
    );
}