import { useState } from "react";
import Book from "./Book";
import Shelf from "./Shelf"
import NewShelfForm from "./NewShelfForm";
import { createBrowserRouter, Link, Route, Routes, useParams } from "react-router-dom";
import NoMatch from "./NoMatch";


const Library = () => {

  let libraryStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: "100%",
  }

  const [shelves, setShelves] = useState([
    {
      genre: 'Fiction',
      books: [
        { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
        { title: '1984', author: 'George Orwell' },
        { title: 'Beloved', author: 'Toni Morrison' },
        { title: 'The Color Purple', author: 'Alice Walker' },
      ],
    },
    {
      genre: 'Mystery',
      books: [
        { title: 'Gone Girl', author: 'Gillian Flynn' },
        { title: 'The Underground Railroad', author: 'Colson Whitehead' },
        { title: 'IQ', author: 'Joe Ide' },
        { title: 'Blacktop Wasteland', author: 'S. A. Cosby' },
      ],
    },
    {
      genre: 'Science Fiction',
      books: [
        { title: 'Kindred', author: 'Octavia Butler' },
        { title: 'Dawn', author: 'Octavia Butler' },
        { title: 'Parable of the Sower', author: 'Octavia Butler' },
        { title: 'Binti', author: 'Nnedi Okorafor' },
      ],
    },
    {
      genre: 'Fantasy',
      books: [
        { title: 'Children of Blood and Bone', author: 'Tomi Adeyemi' },
        { title: 'Akata Witch', author: 'Nnedi Okorafor' },
        { title: 'Black Leopard, Red Wolf', author: 'Marlon James' },
        { title: 'The Fifth Season', author: 'N. K. Jemisin' },
      ],
    },
  ])
  //This state is used to assign an array of shelves a boolean value. This boolean value will track which shelf is currently being opened.
  // const [expandedShelves, setExpandedShelves] = useState(shelves.map(() => false))
  // This function accepts an index value and applies it to a mapped array of the shelves. The index value is then checked with the index value of each shelf, if they are equivalent, the shelf opens up. 


  const addShelf = (newShelf) => {
    setShelves([...shelves, newShelf]);
  
  }

  // This function accepts an argument of a book to add and the shelfIndex to add it to. 
  // It starts by mapping a new array of shelves. If a shelves index matches the shelfIndex argument, a new shelf is returned
  //including all current books and the new books, if the index doesn't match, we simply return the current shelf. 
  const addBook = (book, shelfIndex) => {
    setShelves(shelves.map((shelf, index) => {
      if (index === shelfIndex) {
        return { ...shelf, books: [...shelf.books, book] };
      } else {
        return shelf
      }
    }));
  }

  return (
    <section style={libraryStyle}>
      <NewShelfForm addShelf={addShelf} />
      {
        shelves.map((shelf, index) => (
          <div key={index}>

            <Link to={`/shelf/${shelf.genre}`} >{shelf.genre}</Link>

            <Routes>
              <Route
                path={`/shelf/${shelf.genre}`}
                element={<Shelf genre={shelf.genre} books={shelf.books} addBook={(book) => addBook(book, index)} />}
              />
            </Routes>
          </div>
        ))
      }
    </section>
  )
}

export default Library;