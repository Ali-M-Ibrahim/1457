import { createRoot } from 'react-dom/client'
import { use, useState } from 'react';

import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import './style.css';

import Home from './elements/Website/Home';
import About from './elements/Website/About';
import Contact from './elements/Website/Contact';
import Product from './elements/Website/Product';
import Profile from './elements/Website/Profile';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about-us' element={<About />} />
                <Route path='/contact-us' element={<Contact />} />
                <Route path='/product/:id' element={<Product />} />
                <Route path='/profile' element={<Profile />} />

            </Routes>

            <ul>
                <li>
                    <NavLink activeclassname="active" to="/">
                        Home
                    </NavLink>
                </li>
                <li>
                    <Link to="/about-us">
                        About
                    </Link>
                </li>
                <li>
                    <Link to="/contact-us">
                        Contact
                    </Link>
                </li>

                <li>
                    <Link to="/product/1">
                        Product 1
                    </Link>
                </li>

                <li>
                    <Link to="/product/2">
                        Product 2
                    </Link>
                </li>

            </ul>
        </Router>
    )
}
createRoot(document.getElementById('root')).render(<App />);

