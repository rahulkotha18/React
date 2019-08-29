import React, { Component } from 'react';
import axios from 'axios'

class PostsList extends Component
    {
        constructor(props)
        {
            super(props)
            this.state={
                posts:[]
            }
        }
        componentDidMount()
        {
            axios.get("http://172.16.18.66:8080/api/employees")
            .then( response=>
                {console.log(response)
                   this.setState({
                        posts:response.data
                   })
                })
            .catch(error=>
                {console.log(error)})
        }
    render() {
        const { posts }=this.state
        return (
            <div>
               List of Posts
               {
                   posts.length ?
                   posts.map(post=> <div key={post.id}>Name :{post.firstName}<br/>Email:{post.email}</div>):

                   null
               }
            </div>
        );
    }
}

export default PostsList;