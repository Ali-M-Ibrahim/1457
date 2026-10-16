
const List2 = (props) => {
    const arrayOfLi = props.data.map((content) => <li key={content}>{content}</li>)
    return (
        <div>
            <h1>List is</h1>
            <ul>
                {arrayOfLi}
            </ul>
        </div>
    )
}

const List3 = (props) => {
    const datacontent = props.data2.map((array) => <li key={array[0]}>{array[0]} {array[1]} </li>)
    return (
        <div>
            <h1>List is</h1>
            <ul>
                {datacontent}
            </ul>
        </div>
    )
}


const Display = (props) => {
    const [name, level] = props.data;
    return (
        <div>
            <p>{name}</p>
            <p>{level}</p>
            <hr />
        </div>
    )
}

const List4 = (props) => {
    const datacontent = props.data2.map((array) => <Display data={array} />)
    return (
        <div>
            <h1>List is</h1>
            <ul>
                {datacontent}
            </ul>
        </div>
    )
}

const List = (props) => {
    console.log(props.data3);
    return (
        <div>
            {props.data3.map((obj) =>
                <p key={obj.country}>
                    {obj.country} -       {obj.city}
                </p>
            )}
        </div>
    )
}

const List1 = (props) => {
    return (
        <div>
            <h1>List is</h1>
            <ul>
                {props.data.map((content) => <li key={content}>{content}</li>)}
            </ul>
        </div>
    )
}


export default List;