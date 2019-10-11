import React, { Component } from 'react';
import axios from 'axios';
// import axios from '../../axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state = {
        posts: [],
        selectedPostId: null,
        error: null,
        // errorMsg: null
    }

    componentDidMount () {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log(response.data);
                const posts = response.data.slice(0, 10);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'jane'
                    }
                });
                this.setState({posts: updatedPosts});
            })
            .catch(err => {
                // alert(err);
                this.setState({error: err.message});
            });

    }

    postSelectedHandler = (id) => {
        this.setState({selectedPostId: id});
    }

    render () {
        let posts = <p>Oopsies! This thing happened: {this.state.error}</p>
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return <Post key={post.id} 
                    title={post.title} 
                    author={post.author} 
                    clicked={() => this.postSelectedHandler(post.id)}/>
            });
        }

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;