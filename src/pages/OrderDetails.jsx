import { MDBBtn, MDBInput } from "mdb-react-ui-kit";

export default function OrderDetails() {
    return (
        <div className="orderDetails w-50  m-auto my-5">

            <form action="">
                <h6>Payment details</h6>
                <p><small>
                    <b className="text-danger">Please don't close this page!</b> to confirm your reservation of <b>Saintmartin Hyundai (Robi Express)</b> of <b>4 tickets</b> please pay <b>Tk 1435</b> for your ticket to our merchant number <b>01815203698</b> thourgh bKash in the <b className="text-danger">next 30 minutes</b>.
                </small></p>
                <p>
                    <small>After paying please enter the transaction id received from bKash below:</small>
                </p>

                <MDBInput id="in1" type="text" label="Transaction Id" size="sm" className="mb-3" />
                <MDBBtn size="sm" block>Verify transaction</MDBBtn>
            </form>
        </div>
    )
}