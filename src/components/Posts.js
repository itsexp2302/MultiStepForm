// src/components/Posts.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://codebuddy.review/posts');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="posts">
      {posts.map((post) => (
        <div key={post.id} className="post">
          <img src={post.avatar} alt={`${post.firstName} ${post.lastName}`} />
          <h3>{`${post.firstName} ${post.lastName}`}</h3>
          <p>{post.writeup}</p>
          <img src={post.image} alt="Post" />
        </div>
      ))}
    </div>
  );
};

export default Posts;
