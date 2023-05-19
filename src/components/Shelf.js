import Book from "./Book";
import { useState } from "react";
import Form from "./Form";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Shelf = ({ genre, books, addBook }) => {
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
        paddingBottom: "15px",
        minWidth: "300px",
    }
    // const {shelfGenre} = useParams();
    // const location = useLocation()
    // const {data} = location.state
    // const addBook = book => setBooks([...books, book])

    return (
        <section style={shelfGenreStyle}>
            <h2>{genre}</h2>
            <section style={shelfStyle}>
                {books.map((book,index) => <Book key={index} title={book.title} author={book.author}/>)}
            </section>
            <Form addBook={addBook} />
        </section>
    )
}

export default Shelf;