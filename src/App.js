import React from 'react'
import './App.css'
import * as BooksAPI from './BooksAPI'
import Bookshelves from './Bookshelves'
import Search from './Search';
import {Route} from 'react-router-dom'
import sortBy from 'sort-by'

class BooksApp extends React.Component {
  
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((booksToShow) => { 
      this.setState({books: booksToShow}) //returns books which are currently in the bookshelves
    })
  }

  changeShelf = (book, shelf) => {
    let booksList;
    if (this.state.books.filter(b => b.id === book.id).length > 0) {
      booksList = this.state.books.map(b => {
        if (b.id === book.id) { // changing the shelf of an existing book
          return {...book, shelf} 
        } else { // and don't change other books
          return b 
        }
      })
    } else {
      booksList = [...this.state.books, {...book, shelf}] // add a new book to the shelf
    }

    this.setState({books: booksList}) // update books state with new books / updated shelves
    
    BooksAPI.update(book, shelf).then((data) => {
      // returns promise with data back to server
    })
    
  }

  render() {

    this.state.books.sort(sortBy('title'));

    return (
      <div className="app">
        <Route exact path="/search" render={() =>(
          <Search books={this.state.books} onChangeShelf={this.changeShelf}/> 
          )}
        />
        <Route exact path="/" render={() => (
          <Bookshelves books={this.state.books} onChangeShelf={this.changeShelf}/>
        )}
        />
      </div>
    )
  }
}

export default BooksApp
