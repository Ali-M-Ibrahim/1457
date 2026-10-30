import { useParams } from "react-router-dom";

const Product = () => {
    const { id } = useParams();

    return (
        <div>
            <p>I am product page and id is : {id}</p>
        </div>
    )
}

export default Product;