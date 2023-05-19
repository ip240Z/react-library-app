import Book from "./Book";
import { useState } from "react";
import Form from "./Form";

const Shelf = (props) => {
    let shelfGenreStyle ={
        borderTop: "2px solid black",
        width: "75%",
        display: "flex",
        flexDirection: 'column',
        alignItems: "center",
    }
    let shelfStyle = {
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "10px",
        paddingBottom: "15px"
    }

    const [books, setBooks] = useState(props.books)

    const addBook = book => setBooks([...books, book])

    return (
        <section style={shelfGenreStyle}>
            <h2>{props.genre}</h2>
            <section style={shelfStyle}>
                {books.map(book => <Book title={book.title} author={book.author} />)}
            </section>
            <Form addBook={addBook} />
        </section>
    )
}

export default Shelf;