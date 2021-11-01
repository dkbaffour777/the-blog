import React from "react";
import { Link } from "react-router-dom";
import { format_plural, format_date } from "../utils/helpers";

const PostInfo =({post})=> {
    const {id, title, content, comments, user, created_at} = post;
    return (
        <Link to={`/post/${id}`} className="post">
            <div className="title">
                <h2>{ title }</h2>
            </div>
            <div className="content">
                <p>{ content }</p>
            </div>
            <div className="meta">
                <Link to={`/post/${id}`}>{ comments?.length } { format_plural("comment", comments?.length) }</Link>
                <span style={{marginLeft: "20px", fontSize: "small"}}>Posted by { user?.username } on { format_date(created_at) }</span>
            </div>
        </Link>
    );
}

export default PostInfo;