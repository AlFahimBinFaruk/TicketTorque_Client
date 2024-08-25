import { Link } from "react-router-dom";
import SingleHistoryCard from "../components/SingleHistoryCard";
import { useGetMyOrderListQuery } from "../services/order_api";
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,

} from 'mdb-react-ui-kit';
export default function MyOrderList() {
    const { data: details, isLoading, error } = useGetMyOrderListQuery();

    if (isLoading) {
        return <>Loading..</>
    }

    if (error) {
        return <>Order fetching error</>
    }

    // console.log("details ", details);

    return (
        <div className="purchase-history m-auto my-5">
            <h6>Your purchase history</h6>
            <div className="my-5 d-flex">
                {details?.orders.length > 0 ? <>
                    {details.orders.map((data, ind) => (

                        <MDBCard className='mb-4' role="button">
                            <MDBCardBody>
                                <Link to={`/order-details/${data.id}`}>
                                    <MDBCardTitle className='text-primary'>{data.id}</MDBCardTitle>
                                </Link>


                                <p>{data.payment_status}</p>



                            </MDBCardBody>
                        </MDBCard>

                    ))}
                </> : <p>No data to show.</p>}

            </div>
        </div>
    )
}