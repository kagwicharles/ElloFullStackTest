import { makeAutoObservable } from 'mobx';
import { fetchBooks } from '../api/apiservice.js';
import Book from '../model/Book.js';

class BooksList {
  books = [];

  constructor() {
    makeAutoObservable(this);
  }

  fetchBooks = () => {
    fetchBooks()
      .then(result => {
        const booklist = result.data.books.map(book => new Book(book.title, book.coverPhotoURL, book.author, false));
        this.setBooks(booklist);
      })
      .catch(error => {
        console.log(error);
      });
  };

  toggleAssignStatus = (bookTitle) => {
    const bookIndex = this.books.findIndex((book) => book.title === bookTitle);
    if (bookIndex !== -1) {
      const updatedBooks = [...this.books];
      updatedBooks[bookIndex].isAssigned = !updatedBooks[bookIndex].isAssigned;
      this.setBooks(updatedBooks);
    }
  };

  setBooks = (books) => {
    this.books = books;
  };
}

export default new BooksList();
