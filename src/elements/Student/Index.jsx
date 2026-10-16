import './style.css';

const Student2 = (props) => {
    console.log(props);
    return (
        <div className="card">
            <img src={props.img} alt="Card Header Image" className="card-image" />
            <div className="card-content">
                <span className="card-tag">{props.year} | Age: {props.currentYear - props.birthYear}</span>
                <h3 className="card-title">{props.name} - {props.currentYear - props.birthYear}</h3>
                <p className="card-description">{props.description} - {props.currentYear - props.birthYear}</p>
                {props.canEnroll ? <button onClick={props.action} className="card-btn">Enroll</button> : null}
            </div>
        </div>
    )
}

const Student = (props) => {
    const { img, year, currentYear, birthYear, description, action, canEnroll, name } = props;
    return (
        <div className="card">
            <img src={img} alt="Card Header Image" className="card-image" />
            <div className="card-content">
                <span className="card-tag">{year} | Age: {currentYear - birthYear}</span>
                <h3 className="card-title">{name} - {currentYear - birthYear}</h3>
                <p className="card-description">{description} - {currentYear - birthYear}</p>
                {canEnroll ? <button onClick={action} className="card-btn">Enroll</button> : null}
            </div>
        </div>
    )
}

export default Student;