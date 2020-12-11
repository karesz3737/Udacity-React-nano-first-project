import React from "react";
import { Link } from "react-router-dom";
import ThreeShels from "./ThreeShels";
const Bookshels = ({ book, bookChanger }) => {
  const Cr = book.filter((bb) => bb.shelf === "currentlyReading");
  const Wr = book.filter((bb) => bb.shelf === "wantToRead");
  const r = book.filter((bb) => bb.shelf === "read");
  const titles = ["Currently Reading", "Want to Read", "Read"];
  return (
    <div className="list-books">
      <div className="list-books-content">
        <ThreeShels title={titles[0]} book={Cr} bookChanger={bookChanger} />
        <ThreeShels title={titles[1]} book={Wr} bookChanger={bookChanger} />
        <ThreeShels title={titles[2]} book={r} bookChanger={bookChanger} />
      </div>
      <div className="open-search">
        <Link to="/search">
        <button >
          Add a book
        </button>
        </Link>
      
      </div>
    </div>
  );
};

export default Bookshels;
