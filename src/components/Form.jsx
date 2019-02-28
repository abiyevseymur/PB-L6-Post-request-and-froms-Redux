import React from 'react'

const Form = props => {
    let newTitleElement = React.createRef()
    let newBodyElement = React.createRef()

    let onTitleBodyChange = () => {
        let title = newTitleElement.current.value
        let body = newBodyElement.current.value
        props.setNewPost(title, body)
    }

    let onSubmitBtn = () => {
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
            {props.error && props.error.title==null? null:
            <div className="ui message red">
                <p>{props.error?props.error.title:null}</p>
            </div>}
            <div className="field">
                <label>Post</label>
                <textarea onChange={onTitleBodyChange} ref={newBodyElement}></textarea>
            </div>
            {props.error && props.error.body==null ?null:
            <div className="ui message red">
                <p>{props.error?props.error.body:null}</p>
            </div>}
            <button className="ui submit button" onClick={onSubmitBtn}  >Submit</button>

        </div>
    )
}
export default Form;