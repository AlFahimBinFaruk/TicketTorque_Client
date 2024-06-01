import { MDBCol, MDBRow, MDBInput, MDBBtn, MDBCheckbox } from 'mdb-react-ui-kit';


export default function Home() {
    return (
        <div className="home w-50 m-auto my-5">
            <h5>Select Your desired citeria</h5>
            <form action="POST" className='my-3'>
                <p className='text-start'>
                    <small>Select Vehicle</small>
                </p>
                <div className="vehicle-list d-flex justify-content-between flex-wrap mb-3">
                    <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Bus' />
                    <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Launch' />
                    <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Train' />
                    <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Plane' />
                </div>

                <div className="mb-3">
                <MDBInput label="From" id="form1" type="text"  />
                <div className="drop-down">
                    <p className='mb-1' role="button">Chattogram</p>
                    <p className='mb-1'>Cumira</p>
                </div>
                </div>
                <MDBInput label="To" id="form1" type="text" className="mb-3" />
                <MDBRow className='mb-3'>
                    <MDBCol>
                        <MDBInput id='form6Example1' label='Date of Journey' type='date' />
                    </MDBCol>
                    <MDBCol>
                        <MDBInput id='form6Example2' label='Date of Return' type='date' />
                    </MDBCol>
                </MDBRow>
                <MDBBtn block size='sm'>Search</MDBBtn>
            </form>
        </div>
    )
}