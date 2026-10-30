import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    return (
        <div>
            <p>Hi I am home page</p>
            <button onClick={() => navigate("about-us")}>Go to about</button>
            <br></br>
            <button onClick={() => navigate("contact-us")}>Go to contact</button>
            <br></br>
            <button onClick={() => navigate("product/1")}> product 1 </button>
        </div>
    )
}

export default Home;