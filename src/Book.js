import React, { Component } from 'react'

class Book extends Component {

    state = {
        shelf: "none" //standart chosen value in the dropdown for not chosen books
    }

    componentDidMount() {
        if(this.props.book.shelf) {
            this.setState({ shelf: this.props.book.shelf }) //set the value in the dropdown menu
        }
    }

    changeBookshelf = (event) => {
        this.setState({
            shelf: event.target.value //update to chosen shelf value
        })
        this.props.onUpdateBook(this.props.book, event.target.value) //set book shelf to chosen shelf
    }


    render() {
        return(
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: this.props.book.imageLinks ? `url(${this.props.book.imageLinks.thumbnail})` : '' }}></div>
                        <div className="book-shelf-changer">
                        <select onChange={this.changeBookshelf} value={this.state.shelf}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                        </div>
                    </div>
                    <div className="book-title">{this.props.book.title}</div>
                    <div className="book-authors">{this.props.book.authors ? this.props.book.authors.toString() : this.props.book.authors = ''}</div>
                </div>
            </li> 
        )
    }
}

export default Book