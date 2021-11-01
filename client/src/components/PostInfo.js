import React from "react";
import { format_plural, format_date } from "../utils/helpers";

const PostInfo =(id, title, content, comments, user, created_at)=> {
    return (
        <a href={`/post/${id}`} className="post">
            <div className="title">
                <h2>{ title }</h2>
            </div>
            <div className="content">
                <p>{ content }</p>
            </div>
            <div className="meta">
                <a href={`/post/${id}`}>{ comments.length } { format_plural("comment", comments.length) }</a>
                <span style={{marginLeft: "20px", fontSize: "small"}}>Posted by { user.username } on { format_date(created_at) }</span>
            </div>
        </a>
    );
}

export default PostInfo;