import { useState } from 'react';

const Animal = (props) => {
    const [type, setType] = useState("Cat");
    const [name, setName] = useState(props.name);
    const [nbLegs, setNbLegs] = useState("4");


    const switchType = () => {
        const newType = type == "Cat" ? "Dog" : "Cat";
        setName("jane");
        setType(newType);
        setNbLegs(5);
    }

    function sayHello() {
        alert("hello");
    }
    const sayHi = () => {
        alert("hi");
    }
    return (
        <main>
            <p>I am animal component and my name is: {name}</p>
            <p>My type is: {type}</p>
            <p>Number of legs is: {nbLegs}</p>
            <button onClick={() => setType("Dog")}>Switch Type</button>
            <button onClick={switchType}>Check type</button>
            {/* <button type='button' onClick={sayHello}>Call to declaration fct</button>
            <button type='button' onClick={sayHi}>Call to arrow fct</button>
            <button type='button' onClick={() => alert("button clicked")}>Call to anonymous fct</button> */}
        </main>
    )
}

export default Animal;