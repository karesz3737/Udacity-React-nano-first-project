import React from "react";
import OneBook from "./OneBook";

const ThreeShels = ({ book, bookChanger, title }) => {
  return (
    <div className="bookshelf">
      <h2>{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {book.map((bb) => (
            <li key={bb.id}>
              <OneBook book={bb} bookChanger={bookChanger} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default ThreeShels;
