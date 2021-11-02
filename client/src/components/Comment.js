import React from "react";

const Comment = ({username, comment_text, created_at}) => {
    return (
        <section className="comment">
            <div className="meta">
                {username} on {created_at}
            </div>
            <div className="text">
                <p> {comment_text} </p>
            </div>
        </section>
    );
}

export default Comment;