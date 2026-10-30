import { createRoot } from 'react-dom/client'
import Animal from './elements/Animal';
import Person from './elements/Person';
import { use, useState } from 'react';
import Portfolio from './elements/Portfolio';
import Login from './elements/Login';
import './style.css';




const Main1 = (props) => {
    const [isAuth, setIsAuth] = useState(props.auth);
    const toggleAuth = () => setIsAuth(!isAuth);
    if (isAuth) {
        return (
            <div>
                <Portfolio fct={toggleAuth} />
            </div>
        )
    } else {
        return (
            <div>
                <Login fct={toggleAuth} />
            </div>
        )
    }


}

const Main = (props) => {
    const [isAuth, setIsAuth] = useState(props.auth);
    const toggleAuth = () => setIsAuth(!isAuth);
    return (
        <div>
            {isAuth ? <Portfolio fct={toggleAuth} /> : <Login fct={toggleAuth} />}
            {isAuth && (
                <span>You are logged in </span>
            )}
            {/* {isAuth ? <span>You are logged in </span> : null} */}
        </div>
    )
}

const sayHi = () => alert("hi");

const handleSubmit = (e) => {
    e.preventDefault();
    alert("hi");
}
const Myapp = () => {
    return (
        <div>
            <p>Click the below to trigger the event</p>
            <button onClick={sayHi} >Click me </button>
            <button onClick={() => alert("hi")} >Click me to say hellow </button>
            <form onSubmit={handleSubmit}>
                <button type='submit'>save</button>
            </form>
        </div>
    )
}


const Form = () => {
    const [fname, setFname] = useState("");
    const [fnameError, setFnameError] = useState(false);
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [course1, setCourse1] = useState(false);
    const [course2, setCourse2] = useState(false);
    const [method, setMethod] = useState("");
    const [option, setOption] = useState("");

    const saveChanges = (e) => {
        e.preventDefault();
        if (fname == "") {
            setFnameError(true);
        } else {
            setFnameError(false);
        }

        if (!course1 && !course2) {
            alert("please choose at least one course");
        }

        if (method == "") {
            alert("please choose a method")
        }
        console.log("The name is: " + fname + " " + lname);
        console.log("The email is:" + email);
        console.log("course 1?" + course1);
        console.log("method is?" + method);
        console.log("options is 1?" + option);

    }
    return (
        <div className="form-container">
            <h2>Get in Touch</h2>
            <p>Fill out the form below and we will get back to you shortly.</p>

            <form onSubmit={saveChanges}>
                <div className="form-row">
                    <div className="form-group">
                        <label >First Name</label>
                        <input className={fnameError ? "is-invalid" : null} onChange={(e) => setFname(e.target.value)} value={fname} type="text" id="first-name" name="first_name" placeholder="John" />
                        {fnameError && (
                            <span>Please enter a name</span>
                        )}
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

                <div className="form-group">
                    <label >Your Message</label>
                    <textarea id="message" onChange={(e) => setMessage(e.target.value)} value={message} name="message" placeholder="How can we help you?" ></textarea>
                </div>
                <div className='form-group'>
                    <label >Course 1</label>
                    <input value={course1} onChange={(e) => setCourse1(e.target.checked)} type='checkbox' />

                    <label >Course 2</label>
                    <input value={course2} onChange={(e) => setCourse2(e.target.checked)} type='checkbox' />
                </div>
                <div className='form-group'>
                    <legend>Select your preferred contact method:</legend>
                    <div>
                        <input type="radio" id="contact-email" name="contact" value="email" checked={method == "email"} onChange={(e) => setMethod(e.target.value)} />
                        <label >Email</label>
                    </div>

                    <div>
                        <input type="radio" id="contact-phone" name="contact" value="phone" checked={method == "phone"} onChange={(e) => setMethod(e.target.value)} />
                        <label >Phone</label>
                    </div>

                </div>

                <select value={option} onChange={(e) => setOption(e.target.value)}>
                    <option value="opt1">op1 </option>
                    <option value="opt2">op2 </option>
                    <option value="opt3">op3 </option>
                </select>

                <button type="submit">Send Message</button>
            </form>
        </div>
    )
}

const Form2 = () => {
    const [data, setData] = useState({
        fname: "",
        lname: "",
        email: ""
    });

    const updateData = (e) => {
        const newData = {
            ...data,
            [e.target.name]: e.target.value
        }
        setData(newData);
    }

    const saveData = (e) => {
        e.preventDefault();
        console.log(JSON.stringify(data));
    }
    return (
        <div className="form-container">
            <h2>Get in Touch</h2>
            <p>Fill out the form below and we will get back to you shortly.</p>

            <form onSubmit={saveData}>
                <div className="form-row">
                    <div className="form-group">
                        <label >First Name</label>
                        <input onChange={updateData} name='fname' value={data.fname} type="text" id="first-name" placeholder="John" />

                    </div>
                    <div className="form-group">
                        <label >Last Name</label>
                        <input onChange={updateData} name='lname' value={data.lname} type="text" id="last-name" placeholder="Doe" />
                    </div>

                    <div className="form-group">
                        <label >Email</label>
                        <input onChange={updateData} name='email' value={data.email} type="text" id="last-name" placeholder="email" />
                    </div>

                </div>
                <button type="submit">Send Message</button>
            </form>
        </div>
    )
}


createRoot(document.getElementById('root')).render(<Form2 />);

