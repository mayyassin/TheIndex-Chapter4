import React, { Component } from "react";

class BookRow extends Component {
  render() {
    let book = this.props.book;
    let author = this.props.author;
    let authorsPerBook = book.authors.map(author => {
      return `${author.name}, `;
    });

    return (
      <tr>
        <td>{book.title}</td>
        <td>{authorsPerBook}</td>
        <td>
          <button className="btn" style={{ backgroundColor: book.color }} />
        </td>
      </tr>
    );
  }
}

export default BookRow;
