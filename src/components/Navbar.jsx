import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {
    MDBNavbar,
    MDBContainer,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBCollapse
} from 'mdb-react-ui-kit';
import { useGetMyProfileQuery } from '../services/user_api';

export default function Navbar() {
    const [openNavCentred, setOpenNavCentred] = useState(false);

    const { data: details, isLoading } = useGetMyProfileQuery();

    if (isLoading) {
        return <>Loading..</>
    }


    return (
        <MDBNavbar expand='lg' light bgColor='light'>
            <MDBContainer fluid>
                <MDBNavbarToggler
                    type='button'
                    data-target='#navbarCenteredExample'
                    aria-controls='navbarCenteredExample'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setOpenNavCentred(!openNavCentred)}
                >
                    <MDBIcon icon='bars' fas />
                </MDBNavbarToggler>

                <MDBCollapse navbar open={openNavCentred} center id='navbarCenteredExample'>
                    <MDBNavbarNav fullWidth={false} className='mb-2 mb-lg-0'>
                        <MDBNavbarItem>
                            <Link to="/">
                                <MDBNavbarLink>
                                    TicketTorque
                                </MDBNavbarLink>
                            </Link>
                        </MDBNavbarItem>

                        <MDBNavbarItem>
                            <Link to="/my-order-list">
                                <MDBNavbarLink>
                                    My Orders
                                </MDBNavbarLink>
                            </Link>
                        </MDBNavbarItem>

                        {details?.email ? <>
                            <MDBNavbarItem>
                                <Link to="/profile">
                                    <MDBNavbarLink>
                                        Profile
                                    </MDBNavbarLink>
                                </Link>
                            </MDBNavbarItem>
                        </> : <>
                            <MDBNavbarItem>
                                <Link to="/login">
                                    <MDBNavbarLink>
                                        Login
                                    </MDBNavbarLink>
                                </Link>
                            </MDBNavbarItem>


                            <MDBNavbarItem>
                                <Link to="/register">
                                    <MDBNavbarLink>
                                        Register
                                    </MDBNavbarLink>
                                </Link>
                            </MDBNavbarItem>

                        </>}





                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );
}