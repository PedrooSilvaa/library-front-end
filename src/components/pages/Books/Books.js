import React from 'react'
import { useState, useEffect } from 'react';
import { ListBooks } from '../../helpers/LibraryRequest'
import './Books.css'
import bookIcon from '../../../assets/e-book.png'
import { NavLink } from "react-router-dom";

const ListBook = () => {
  const [bookData, setBookData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await ListBooks();
      setBookData(data);
    }

    fetchData();
  }, []);


  
  return (
    <div>
      {bookData.length > 0 ? (
        <div className='containerBooks'>
          {bookData.map((book, index) => (
            <div className='containerEachBooks' key={index}>
              <h3 className='titleBook'>{book.title}</h3>
              <img src={bookIcon} alt="" />
              <h3>{book.author}</h3>
              <NavLink className={({ isActive }) => (isActive ? "active" : 'link')} to={'/search/' + book.title + '/about'}>Detalhes</NavLink>
            </div>
          ))}
        </div>
        
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default ListBook