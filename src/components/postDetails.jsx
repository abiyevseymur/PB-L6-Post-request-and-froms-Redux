import React from 'react'


const PostDetails = (props) => {
    if (props.posts.posts) {
        const post = props.posts.posts.filter(data => data.id === parseInt(props.match.params.id))
        return (<>
                <div className="ui piled segment">
                    <h2 className="ui header">{post[0].title}</h2>
                    <p>{post[0].body}</p>
                </div>
                    <div onClick={()=>props.history.push("/list")} className="ui blue animated button" tabIndex="0">
                        <div className="visible content"  >Back</div>
                        <div className="hidden content">
                            <i className="left arrow icon"></i>
                        </div>
                    </div>
            </>)}
    else 
    return <div className="ui active inline centered loader"></div>
}

export default PostDetails;