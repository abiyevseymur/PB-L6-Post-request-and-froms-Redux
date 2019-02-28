import React from 'react'
import {Link} from 'react-router-dom'

const Form = props => {
    let newTitleElement = React.createRef()
    let newBodyElement = React.createRef()

    let onTitleBodyChange =() =>{
        let title = newTitleElement.current.value
        let body = newBodyElement.current.value
        props.setNewPost(title,body)
    }

    let onSubmitBtn = () =>{
        props.submitted()
        newBodyElement.current.value = ""
        newTitleElement.current.value = ""
    }

      return (
        <div className="ui form">
            <div className="field">
                <label >Title</label>
                <textarea rows="1" onChange={onTitleBodyChange} ref={newTitleElement}></textarea>
            </div>
            <div className="field">
                <label>Post</label>
                <textarea  onChange={onTitleBodyChange}  ref={newBodyElement}></textarea>
            </div>
            <Link to = "/list" >
            <button className="ui submit button" onClick={onSubmitBtn}  >Submit</button>
            </Link>
           
        </div>
    )
}
export default Form;