
import { useLocation } from "react-router-dom";
const Profile = () => {
    const location = useLocation();
    const { fname, lname, email } = location.state;
    return (
        <div>
            <p>FName is: {fname} </p>
            <p>Lname is: {location.state.lname} </p>
            <p>Email is: {location.state.email} </p>
        </div>
    )
}

export default Profile;