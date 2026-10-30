import { useState } from "react";
import { useNavigate } from "react-router-dom";

// const Form2 = () => {
//     const navigate = useNavigate();

//     const [data, setData] = useState({
//         fname: "",
//         lname: "",
//         email: ""
//     });

//     const updateData = (e) => {
//         const newData = {
//             ...data,
//             [e.target.name]: e.target.value
//         }
//         setData(newData);
//     }

//     const saveData = (e) => {
//         e.preventDefault();
//         console.log(JSON.stringify(data));
//         const info = {
//             fname: "test",
//             lname: "test3",
//             email: 
//         }
//         navigate('/profile', { state: info });
//     }
//     return (
//         <div className="form-container">
//             <h2>Get in Touch</h2>
//             <p>Fill out the form below and we will get back to you shortly.</p>

//             <form onSubmit={saveData}>
//                 <div className="form-row">
//                     <div className="form-group">
//                         <label >First Name</label>
//                         <input onChange={updateData} name='fname' value={data.fname} type="text" id="first-name" placeholder="John" />

//                     </div>
//                     <div className="form-group">
//                         <label >Last Name</label>
//                         <input onChange={updateData} name='lname' value={data.lname} type="text" id="last-name" placeholder="Doe" />
//                     </div>

//                     <div className="form-group">
//                         <label >Email</label>
//                         <input onChange={updateData} name='email' value={data.email} type="text" id="last-name" placeholder="email" />
//                     </div>

//                 </div>
//                 <button type="submit">Send Message</button>
//             </form>
//         </div>
//     )
// }

const Form3 = () => {
    const navigate = useNavigate();
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const saveChanges = (e) => {
        e.preventDefault();
        navigate('/profile', { state: { fname: fname, lname: lname, email: email } });
    }
    return (
        <div className="form-container">
            <h2>Get in Touch</h2>
            <p>Fill out the form below and we will get back to you shortly.</p>

            <form onSubmit={saveChanges}>
                <div className="form-row">
                    <div className="form-group">
                        <label >First Name</label>
                        <input onChange={(e) => setFname(e.target.value)} value={fname} type="text" id="first-name" name="first_name" placeholder="John" />
                    </div>
                    <div className="form-group">
                        <label >Last Name</label>
                        <input onChange={(e) => setLname(e.target.value)} value={lname} type="text" id="last-name" name="last_name" placeholder="Doe" />
                    </div>
                </div>

                <div className="form-group">
                    <label>Email Address</label>
                    <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} id="email" name="email" placeholder="john@example.com" />
                </div>


                <button type="submit">Send Message</button>
            </form>
        </div>
    )
}

export default Form3;