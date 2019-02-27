import React from 'react'
import {Link} from 'react-router-dom'


const PostDetails = props => {
    return (
        <>
          {!props.details.posts ? <div className="ui active inline centered loader"></div>:
          
            <div className="ui piled segment">
                <h2 className="ui header">{props.details.posts.title}</h2>
                <p>{props.details.posts.body}</p>
            </div>
          }
            <Link to="/list">
                <div className="ui blue animated button"  tabIndex="0">
                    <div className="visible content">Back</div>
                    <div className="hidden content">
                        <i className="left arrow icon"></i>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default PostDetails;