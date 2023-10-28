import React, { useState, useMemo } from 'react';
import Post from '../post/Post';
import './HomePage.css';

const HomePage = () => {
    const [posts, setPosts] = useState([
        { postId: 1, title: 'Post 1' },
        { postId: 2, title: 'Post 2' },
    ]);

    const handleDeletePost = (postId) => {
        setPosts(posts.filter(post => post.postId !== postId));
    };

    const memoizedPosts = useMemo(() => posts, []);

    return (
        <div className="home-page">
            <h1>Welcome to the Home Page</h1>
            {memoizedPosts.map(post => (
                <Post
                    key={post.postId}
                    postId={post.postId}
                    title={post.title}
                    onDelete={handleDeletePost}
                />
            ))}
        </div>
    );
};

export default React.memo(HomePage);
