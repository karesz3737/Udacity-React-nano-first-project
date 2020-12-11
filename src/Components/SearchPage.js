import React, { Component } from "react";
import OneBook from "./OneBook";

export default class SearchPage extends Component {
  state = { query: "" };
  handLeInput = (event) => {
    this.setState({ query: event.target.value });
    this.props.bookSearch(this.state.query);
  };
  render() {
    const { booksB, bookChanger, resetBooks } = this.props;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <button className="close-search" onClick={resetBooks}></button>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={this.handLeInput}
              value={this.state.query}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {booksB.length > 0
              ? booksB.map((book, index) => (
                  <OneBook book={book} bookChanger={bookChanger} key={index} />
                ))
              : ""}
          </ol>
        </div>
      </div>
    );
  }
}
