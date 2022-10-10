import React from 'react';
import { connect } from 'react-redux';
import { fetchPostsAndUsers } from '../actions_thunk';
import UserHeader from './userHeader'
import { faker } from '@faker-js/faker';

class PostList extends React.Component{
  componentDidMount() {
   this.props.fetchPostsAndUsers();
 }

 renderList() {
   return this.props.posts.map(post => {
     return (
        <div style={{display: "flex", border: '1px dashed '}}>
        <img alt="avatar" src= {faker.image.avatar()}  height="100" />
            <div>
                <h3 class="mb-1">{post.title}</h3>
                <p class="mb-1">{post.body}</p>
                <small class="mb-1"><UserHeader userId={post.userId}/></small>
            </div>
        </div>
   
     )
   })
 }

  render() {
    return (
      <div>{this.renderList()}</div>
    )
  }
}

const mapStateToProps = state => {
  return { posts: state.posts };
};

export default connect(
    mapStateToProps,
    { fetchPostsAndUsers }
)(PostList);