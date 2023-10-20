import { useParams } from "react-router-dom"

export default function OrderDetails() {
    const {id} = useParams()
    return (
        <p>
            Order {id}
        </p>
    )
}