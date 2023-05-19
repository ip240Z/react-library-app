const Book = (props) => {
    let bookStyle = {
        border: "1px solid lightgrey",
        width: "35%",
        padding: "15px"
    }
    return (
        <article style={bookStyle}>
            <h4>{props.title}</h4>
            <p>{props.author}</p>
        </article>
    )
}

export default Book;