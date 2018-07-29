import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'
import sortBy from 'sort-by'

class Search extends Component {
    state = {
        query: '',
        booksToShow: []
    }

    updateQuery = (currentQuery) => {
        let filteredCurrentQuery = currentQuery.replace(/[^A-Za-z0-9\s]/g, ''); //ignore symbols entry
        this.setState({query: filteredCurrentQuery})
        let booksSearchList = [];
        if (filteredCurrentQuery === '') {
            this.setState({booksToShow: booksSearchList}) //show empty list
        } else {
            BooksAPI.search(filteredCurrentQuery).then(resp => { //searching for match in data base
                if (resp.length > 0) { //if at least one found
                    booksSearchList = resp.map(book => {
                        let i = this.props.books.findIndex(b => b.id === book.id)
                        if (i >= 0) {
                            return this.props.books[i] //return earlier chosen books with defined shelf
                        } else {
                            return book //return other books with matched search criteria
                        }
                    })
                }
                this.setState({booksToShow: booksSearchList}) //show books according to the search criteria
            }) 
        }
    }
    
    render() {

        this.state.booksToShow.sort(sortBy('title'));

        return(
            <div className="search">
                <div className="search-books">
                    <div className="search-books-bar">
                        <Link className="close-search" to="/">Close</Link>
                        <div className="search-books-input-wrapper">
                            <input type="text" placeholder="Search for a book by title or author" value={this.state.query} onChange={(event) => this.updateQuery(event.target.value)}/>      
                        </div>
                    </div>
                    <div className="search-books-results">
                        <ol className="books-grid">
                            {this.state.booksToShow.map(book => (
                                <Book key={book.id} book={book} onUpdateBook={this.props.onChangeShelf}/>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        )
    }
    
    
}

export default Search