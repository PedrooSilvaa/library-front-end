import { useSearchParams, Link } from "react-router-dom";
import React from 'react'

import bookIcon from '../../../assets/e-book.png'
import { useState, useEffect } from 'react';
import { getBookById, getBookByTitle } from '../../helpers/LibraryRequest'

const SearchBook = () => {
  let [searchParams] = useSearchParams();

  const [bookData, setBookData] = useState(null);

  useEffect(() => {
    async function fetchData() {

      const bookTitle = searchParams.get('title'); 
      if (bookTitle) {
        const data = await getBookByTitle(bookTitle);
        setBookData(data);
      }
    }

    fetchData();
  }, [searchParams]);


  return (
    <div>
      {bookData ? (
        <div className="containerEachBooks">
        <h3 className="titleBook">{bookData.title}</h3>
        <img src={bookIcon} alt="" />
        <h3>{bookData.author}</h3>
        <h3>{bookData.description}</h3>
        </div>
        
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SearchBook;