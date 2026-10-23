import { createRoot } from 'react-dom/client'
import Animal from './elements/Animal';
import Person from './elements/Person';
import { use, useState } from 'react';
import Portfolio from './elements/Portfolio';
import Login from './elements/Login';





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


createRoot(document.getElementById('root')).render(<Main auth={false} />);

