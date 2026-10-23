import './styles.css'

const Login = (props) => {
    return (
        <div className="login-container">
            <h1>Please Log In</h1>
            <h2>To access your account</h2>
            <button onClick={props.fct} className="card-btn">Login</button>
        </div>
    )
}

export default Login;