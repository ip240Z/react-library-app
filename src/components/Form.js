import { useState } from "react";

const Form = ({ addBook }) => {

    let formStyle = {
        display: "flex",
        flexDirection: "column",
        width: "300px",
        gap: "5px",
        paddingBottom: "15px",
    }

    const [bookDetails, setBookDetails] = useState({ title: "", author: ""})

    const handleChange = (e) => {
        setBookDetails({...bookDetails, [e.target.name]: e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addBook(bookDetails)
        setBookDetails({title: "", author: ""})
    }

    return (
        <form style={formStyle} onSubmit={handleSubmit} action="">
            <h4>Add a book</h4>
            <div>
                <input type="text" name="title" placeholder="Enter book title" value={bookDetails.title} onChange={handleChange} required />
            </div>
            <div>
                <input type="text" name="author" placeholder="Enter the book's author" value={bookDetails.author} onChange={handleChange} required />
            </div>
            <div>
            <button>Add Book</button>
            </div>
        </form>
    )
}

export default Form; 