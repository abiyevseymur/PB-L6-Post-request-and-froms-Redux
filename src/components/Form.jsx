import React from 'react'
import {Link} from 'react-router-dom'

const Form = props => {
    let newTitleElement = React.createRef()
    let newBodyElement = React.createRef()

    let onTitleChange =() =>{
        let title = newTitleElement.current.value
        props.title(title)
    }
    let onBodyChange =() =>{
        let body = newBodyElement.current.value
        props.body(body)
    }
    let onSubmitBtn = () =>{
        props.submitted()
    }

    return (
        <div className="ui form">
            <div className="field">
                <label >Title</label>
                <textarea rows="1" onChange={onTitleChange} ref={newTitleElement}></textarea>
            </div>
            <div className="field">
                <label>Post</label>
                <textarea  onChange={onBodyChange}  ref={newBodyElement}></textarea>
            </div>

            <Link to = "/list" className="item">
            <div className="ui submit button" onClick={onSubmitBtn} >Submit</div>
            </Link>
           
        </div>
    )
}
export default Form;