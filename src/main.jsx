import { createRoot } from 'react-dom/client'
import './css/app.css';

import Image from './images/img.png';

import Student from './elements/Student/Index';

import CustomName from './elements/Car';
import { Product } from './elements/Car';

// first jsx element
const Element1 = <h1>Hello I am your first element</h1>
const Element2 = (
  <div>
    <h1 >React JS</h1>
    <p>Web and Mobile development course</p>
  </div>
)

const Header = (
  <header>
    <h1 className='class1' >This is my header</h1>
  </header>
)

const Body = (
  <section>
    <p style={{ color: 'red', border: '1px solid black', fontSize: '20px' }}>This is my content</p>
    <p>this is my second content</p>
  </section>
)

const styling = { backgroundColor: 'red', color: "white" };

const Footer = (
  <footer>
    <p style={styling}>&cpy; 2026 All right reserved</p>
  </footer>
)

const App = (
  <div>
    {Header}
    {Body}
    {Footer}
  </div>
)


const sentence = "this is my first element";
const a = 1;
const b = 2;
const obj = {
  fname: "Ali",
  lname: "Ibrahim"
};


const list = ["html", "css", "js"];

const listli = list.map((n) => <li key={n}>{n}</li>);



const App2 = (
  <section>
    <p className='class1'>The sentence is: {sentence}</p>
    <p>the sum of a and b is: {a + b}</p>
    <p>The values of object are: {obj.fname} {obj.lname}</p>
    <ul>
      {listli}
    </ul>
  </section>
)



const Card = (
  <div>
    <h1>this is an online image</h1>
    <img src='https://ua.edu.lb/images/UA-SubpageBanner.jpg?w=1920&h=816' alt='Image' width={500} />

    <h1>Image inside public folder</h1>
    <img src='./images/img1.png' alt='image' width={500} />


    <h1>Image using import</h1>
    <img src={Image} />


  </div>
)




const Person = () => {
  return (
    <div>
      <p style={{ color: 'red' }}>Hello I am a person</p>
      <p>This is my description.................</p>
    </div>
  )
}

const data = (
  <div>
    <Person />
    <Person />
    <Person />
    <CustomName />
    <Product />
  </div>
)

function sayHello() {
  alert("Hello class");
}

const Students = () => {
  return (
    <div className='students'>
      <Student action={sayHello} canEnroll={true} birthYear="2000" currentYear="2026" img="https://ua.edu.lb/images/UA-SubpageBanner.jpg?w=1920&h=816" year="Second Year" name="Ali Ibrahim" description="bla bla vla" />
      <Student action={sayHello} canEnroll={false} birthYear="2000" currentYear="2026" img="https://ua.edu.lb/images/UA-SubpageBanner.jpg?w=1920&h=816" year="First Year" name="Ahmad Sheikh" description="bla bla vla 2" />
      <Student action={sayHello} canEnroll={true} birthYear="2000" currentYear="2026" img="https://ua.edu.lb/images/UA-SubpageBanner.jpg?w=1920&h=816" year="Third Year" name="Joe Doe" description="bla bla vla 3" />
    </div>)
}


const Teacher = (props) => {
  const newelemtns = props.degress.map((n) => <li key={n}>{n}</li>)
  return (
    <div>
      <h1>First Name: {props.data.fname}  | Last Name: {props.data.lname}   </h1>
      <h1>Degrees:</h1>
      <ul>
        {newelemtns}
      </ul>
    </div>
  )
}

const jsonObj = {
  fname: "Ali",
  lname: "Ibrahim"
}

const TeacherJsx = <Teacher data={jsonObj} degress={["Master", "Phd"]} />





createRoot(document.getElementById('root')).render(<Students />);


