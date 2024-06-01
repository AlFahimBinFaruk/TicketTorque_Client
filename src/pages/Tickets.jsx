import SingleTicketCard from "../components/SingleTicketCard";

export default function Tickets(){
    return(
        <div className="tickets w-50  m-auto my-5">
            <h6>Tickets under selected citeria</h6>
            <div className="my-5">
                <SingleTicketCard/>
                <SingleTicketCard/>
                <SingleTicketCard/>
            </div>
        </div>
    )
}