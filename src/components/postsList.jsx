import React from 'react'
import { Link } from 'react-router-dom'

const PostList = props => {
  return (<div className="ui  segment">
    <div className="ui  relaxed divided list">
      {props.loading ? <div className="ui active inline centered loader"></div> :
        props.posts.posts.map(p =>
          <Link to={`/details/${p.id}`}
            onClick={() => props.getId(p.id)} className="item" key={p.id}>
            <div className="content"  >
              <div className="header">{p.title}</div>
              <p>{p.body}</p>
            </div>
          </Link>)}
    </div>
  </div>)

}

export default PostList