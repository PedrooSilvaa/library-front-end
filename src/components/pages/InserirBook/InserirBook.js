import React from 'react'
import { PostNewBook } from '../../helpers/LibraryRequest';
import { useState } from 'react';
import './InserirBook.css'

const InserirBook = () => {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [published_date, setPublishedDate] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (event) => {

        const newBook = {
            title,
            author,
            published_date,
            description
        }

        try{
            const createBook = await PostNewBook(newBook);

            setTitle('');
            setAuthor('');
            setPublishedDate('');
            setDescription('');
        }catch (error){
            console.error("Failed to create book: " + error)
        }

    }

return (
    <div className='containerInsertBook'>
        <h1>Create New Book</h1>
        <form onSubmit={handleSubmit} className='formInserir'>
            <label>
                Title
            </label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
            <label>
                Author
            </label>
                <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)}/>
            <label>
                Published_Date
            </label>
                <input type="date3" value={published_date} onChange={(e) => setPublishedDate(e.target.value)}/>
            <label>
                Description
            </label>
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}/>
            <input type="submit" value="Add Book" className='inputConfirmar'/>
        </form>
    </div>
)
}

export default InserirBook