import './styles.css'

const Portfolio = (props) => {
    return (
        <div className="card">
            <img src="https://ua.edu.lb/images/UA-SubpageBanner.jpg" alt="Profile Picture" className="card-img" />
            <h2 className="card-name">Alex Morgan</h2>
            <p className="card-title">Frontend Developer</p>
            <p className="card-bio">Building clean, responsive, and user-friendly web experiences with modern HTML, CSS, and JavaScript.</p>
            <button onClick={props.fct} href="#" className="card-btn">Logout</button>

        </div>
    )
}

export default Portfolio;