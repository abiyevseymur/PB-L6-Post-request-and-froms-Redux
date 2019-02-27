import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import Form from './components/Form';
import PostList from './components/postsList';
import { connect } from 'react-redux';
import { loadPosts, getPostId, newPost } from './actions'
import PostDetails from './components/postDetails';


class App extends Component {
  state = {
    userId: 11,
    title: null,
    body: null
  }
  componentDidMount() {
    this.props.loadPosts()
    this.props.getPostId()
  }

  getTitle = (title) => {
    this.setState({
      title: title
    })
    
    

  }
  getBody = (body) => {
    this.setState({
      body: body
    })
  }
  submitFrom = () => {
    this.props.newPost(this.state)
  }


 

  render() {
    console.log(this.state.title)
    return (<BrowserRouter>
      <div className="ui grid">
        <NavBar />
        <div className="twelve wide stretched column">
          <div className="ui segment">
            <Route path='/' exact render={() => <Form
              title={this.getTitle}
              body={this.getBody}
              submitted={this.submitFrom} />} />

            <Route path='/list' render={() => <PostList
              posts={this.props.posts}
              loading={this.props.posts.isLoading}
              getId={this.props.getPostId} />} />

            <Route path='/details/' render={() => <PostDetails
              details={this.props.postDetails} />} />
          </div>
        </div>
      </div>
    </BrowserRouter>
    );
  }
}
function mapStateToProps(store) {

  return {
    posts: store.posts,
    postDetails: store.postDetails
  }
}
export default connect(mapStateToProps, { loadPosts, getPostId, newPost })(App);
