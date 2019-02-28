import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar';
import Form from './components/Form';
import PostList from './components/postsList';
import { connect } from 'react-redux';
import { loadPosts,  newPost } from './actions'
import PostDetails from './components/postDetails';
import NotFound from './components/NotFound'

class App extends Component {
  state = {
    newPost: {
      userId: 11,
      title: null,
      body: null,
    },
    validation:{
      succes:null
    }

  }
  componentDidMount() {
    this.props.loadPosts()
  }
  

  // onPostChange function
  setNewPost = (title, body) => {
    this.setState({
      newPost: {
        title: title,
        body: body
      }
    })
  }


  //all validation when submit button pressed
  submitFrom = () => {
    if (this.state.newPost.title === null || this.state.newPost.title.length < 3)
      alert("The title lenght must be more than 3")
    else if (this.state.newPost.body === null || this.state.newPost.body.length < 10)
      alert("The text message must be more than 10")
    else {
      this.props.newPost(this.state.newPost)
      this.setState({
        newPost: {
          title: null,
          body: null,
        }
      })
    }
  }




  render() {
    console.log()
    return (<BrowserRouter>
      <div className="ui grid">
        <NavBar />
        <div className="twelve wide stretched column">
          <div className="ui segment">

            <Switch>
              <Route path='/' exact render={() => <Form
                setNewPost={this.setNewPost}
                submitted={this.submitFrom}
                onSucces={this.fillForm} />} />

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
    </BrowserRouter>
    );
  }
}
function mapStateToProps(store) {

  return {
    posts: store.posts
  }
}
export default connect(mapStateToProps, { loadPosts, newPost })(App);
