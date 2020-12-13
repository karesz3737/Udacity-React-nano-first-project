import React, { Component } from "react";

export default class OneBook extends Component {
  state = {
    shelf: "None",
  };
  changer = (event) => {
    const shelf = event.target.value;
    this.setState({ shelf });
    this.props.bookChanger(this.props.book, shelf);
  };

  render() {
    const { book } = this.props;
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${
                book.imageLinks
                  ? book.imageLinks.thumbnail
                  : "https://tse4.mm.bing.net/th?id=OIP.Ma16cf9515d636491e82c166e8d76c9b2o0&"
              })`,
            }}
          />
          <div className="book-shelf-changer">
            <select onChange={this.changer} value={book.shelf}>
              <option value="move" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">
          {book.authors ? book.authors.join(", ") : "Unknown"}
        </div>
      </div>
    );
  }
}
