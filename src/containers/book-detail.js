import React, {Component} from 'react'
import {connect} from 'react-redux'

class BookDetail extends Component {
    render(){
        console.log(this.props)

        if(!this.props.book){
            return <div>Select a book to get started.</div>
        }

        return (
            <div>
                <h3>Detail for: </h3>
                <div>Title: {this.props.book.title}</div>
                <div>Pages: {this.props.book.pages}</div>
            </div>
        )
    }
}

function mapStateToProps(state){
    //Whatever is returned will show up as props inside of Booklist
    return{
        book: state.activeBook  
      }
  }
export default connect(mapStateToProps)(BookDetail)

/*
Hi,

The AC voltage in my house is usually 245V-247V. I need to find a transformer that produces output voltage of 240V or below. Which of your product should I choose?

  
*/