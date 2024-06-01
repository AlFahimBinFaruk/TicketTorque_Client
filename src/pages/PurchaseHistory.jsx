import SingleHistoryCard from "../components/SingleHistoryCard";

export default function PurchaseHistory() {
    return (
        <div className="purchase-history w-50  m-auto my-5">
            <h6>Your purchase history</h6>
            <div className="my-5">
                <SingleHistoryCard />
                <SingleHistoryCard />

            </div>
        </div>
    )
}