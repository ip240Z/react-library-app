const Book = (props) => {
    let bookStyle = {
        border: "1px solid lightgrey",
        minWidth: "35%",
        maxWidth: "50%",
        padding: "15px",
    }
    return (
        <article style={bookStyle}>
            <h4>{props.title}</h4>
            <p>{props.author}</p>
        </article>
    )
}

export default Book;