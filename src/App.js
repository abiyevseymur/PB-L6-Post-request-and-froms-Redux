import React, { Component } from 'react';
import {  Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar';
import Form from './components/Form';
import PostList from './components/postsList';
import { connect } from 'react-redux';
import { loadPosts, newPost } from './actions'
import PostDetails from './components/postDetails';
import NotFound from './components/NotFound'

class App extends Component {
  state = {
    newPost: {
      userId: 11,
      title: null,
      body: null,

    },
    validation: {
      submitted: false, 
      success: false,
      error: { title: null, body: null }
    }

  }
  componentDidMount() {
    this.props.loadPosts()
  }

  componentDidUpdate() {
    //create new POST element
    if (this.state.validation.submitted) {
      this.props.newPost(this.state.newPost)
      //old state null
      this.setState({
        newPost: {
          title: null,
          body: null,
        },
        validation: {
          submitted: false,
          success: false,
          error: { title: null, body: null }
        }
      })
    }
  }

  // onPostChange function Validations
  setNewPost = (title, body) => {
    if (this.state.newPost.title === null || this.state.newPost.title.length < 3)
      this.setState({ validation: { error: { title: ("The title lenght must be more than 3") } } })
    else if (this.state.newPost.body === null || this.state.newPost.body.length < 10)
      this.setState({ validation: { error: { body: ("The text message must be more than 10") } } })
    else
      this.setState({ validation: { error: { title: null, body: null } , success: true }})

    this.setState({
      newPost: {
        title: title,
        body: body
      }
    })
  }

  //validations here
  submitFrom = () => {
    if (this.state.validation.success) {
      this.setState({
        validation: {
          submitted: true
        }
      })
      alert("Message was added")
      this.props.history.push("/list")
    }
  }


  render() {
    return (
      <div className="ui grid">
        <NavBar />
        <div className="twelve wide stretched column">
          <div className="ui segment">

            <Switch>
              <Route path='/' exact render={() => <Form
                setNewPost={this.setNewPost}
                submitted={this.submitFrom}
                error={this.state.validation.error} />} />

              <Route path='/list' exact render={() => <PostList
                posts={this.props.posts}
                loading={this.props.posts.isLoading} />} />

              <Route path={`/list/:id`}
                render={(props) => (<PostDetails {...props} posts={this.props.posts} />)} />

              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(store) {

  return {
    posts: store.posts
  }
}
export default connect(mapStateToProps, { loadPosts, newPost })(App);
