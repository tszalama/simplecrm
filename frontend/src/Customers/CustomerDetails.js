import { useParams } from "react-router-dom"

export default function CustomerDetails() {
    const {id} = useParams()
    return (
        <p>
            Customer {id}
        </p>
    )
}