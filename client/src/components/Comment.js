import React from "react";
import { format_date } from "../utils/helpers";

const Comment = (user, comment_text) => {
    return (
        <div className="comments">
            <section className="comment">
                <div className="meta">
                    { user.username } on { format_date(created_at) }
                </div>
                <div className="text">
                    {{ comment_text }}
                </div>
            </section>
        </div>
    );
}

export default Comment;