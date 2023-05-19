import { useState } from "react";
import Book from "./Book";
import Shelf from "./Shelf"
import NewShelfForm from "./NewShelfForm";

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
      const [expandedShelves, setExpandedShelves] = useState(shelves.map(() => false))

      const toggleShelf = (index) => {
        setExpandedShelves(expandedShelves.map((expanded, i) => (i === index ? !expanded : expanded)));
      }

      const addShelf = (newShelf) => {
        setShelves([...shelves, newShelf]);
        setExpandedShelves([...expandedShelves, false]);
      }

    return (
        <section style={libraryStyle}>
          <NewShelfForm addShelf={addShelf} />
        {
          shelves.map((shelf, index) => (
            <div key={index}>
              <h1 onClick={() => toggleShelf(index)}>
                {shelf.genre}
                <span>{expandedShelves[index] ? '▼' : '►'} </span>
              </h1>
              {expandedShelves[index] && <Shelf genre={shelf.genre} books={shelf.books} />}
            </div>
          ))
        }
        </section>
    )
}

export default Library;