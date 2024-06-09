import {useParams } from "react-router-dom";
import React from 'react'
import bookIcon from '../../../assets/e-book.png'
import { useState, useEffect } from 'react';
import {getBookByTitle } from '../../helpers/LibraryRequest'
import './AboutBook.css'

const AboutBook = () => {
  const {title} = useParams();

  const [bookData, setBookData] = useState(null);

  useEffect(() => {
    async function fetchData() {

      const bookTitle = {title}; 
      console.log("booktitle =" + bookTitle.title)
      if (bookTitle) {
        const data = await getBookByTitle(bookTitle.title);
        setBookData(data);
      }
    }

    fetchData();
  }, [title]);


  return (
    <div>
      {bookData ? (
        <div className="containerAbout">
            <div className="containerEachBooks">
                <h3 className="titleBook">{bookData.title}</h3>
                <img src={bookIcon} alt="" />
                <h3>{bookData.author}</h3>
            </div>
            <div className="containerAboutBook">
                    <h2>{bookData.description}</h2>
                    <h2>{bookData.description}</h2>
                    <h2>{bookData.description}</h2>
                    <h2>{bookData.description}</h2>
                    <h2>{bookData.description}</h2>
            </div>
        </div>
        
      ) : (
        <p>Loading About Book...</p>
      )}
            
    </div>
  );
};

export default AboutBook;