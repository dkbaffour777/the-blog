import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { allPosts } from "../Data/FetchData";

const HomePage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const results  = await allPosts();
                setPosts(results);
            } catch (error) {
                console.error("there is error", error);
            }
        })()
    }, []);
    return (
        <ul className="post-list">
            {
                posts.length > 0 &&
                posts.map(post => 
                    <li key={post.id}>
                        <Link to={`/single-post/${post.id}`}>{post.title}</Link>
                    </li>
                )
            }

        </ul>
    );
}

export default HomePage;