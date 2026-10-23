import { useState } from "react";

const Person = () => {
    const [name, setName] = useState("Ali");
    const [dob, setDob] = useState("2000");
    const [address, setAddress] = useState("Beirut")


    const [data, setData] = useState(
        {
            name: "Ali",
            dob: "2000",
            address: "Beirut"
        }
    );


    const changeName = () => {
        setName("Joe Doe");
        // setData({ name: "joe doe" });
        setData(previousData => { return { ...previousData, name: "Joe Doe" } });
    }


    return (
        <div>
            <h1>Using single states: </h1>
            <p>Name is: {name} </p>
            <p>Dob is: {dob} </p>
            <p>Address is: {address} </p>

            <hr />

            <h2>Using one object</h2>
            <p>Name is: {data.name} </p>
            <p>Dob is: {data.dob} </p>
            <p>Address is: {data.address} </p>

            <hr />

            <button onClick={changeName}>Change Name</button>

        </div>
    )
}

export default Person;