import React, { Component } from "react";
import OneBook from "./OneBook";
import { Link } from "react-router-dom";

export default class SearchPage extends Component {
  // state = { query: "" };
  handLeInput = (event) => {
    this.props.bookSearch(event.target.value);
  };
  render() {
    const { booksB, bookChanger, resetBooks } = this.props;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search" onClick={resetBooks}></button>
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={this.handLeInput}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {booksB.length > 0
              ? booksB.map((book) => (
                  <OneBook
                    book={book}
                    bookChanger={bookChanger}
                    key={book.id}
                  />
                ))
              : ""}
          </ol>
        </div>
      </div>
    );
  }
}
