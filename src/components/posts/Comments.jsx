import React, {useState} from "react";
import AddComment from "./AddComment";

import avatar from "../../assets/images/avatar.png";

function Comments() {
    const commentsData = window.commentsData.comments;

    const [comments, setComments] = useState(commentsData);
    const [commentsSlice, setCommentsSlice] = useState(3);

    const showNextComments = () => {
        setCommentsSlice(commentsSlice + 3);
    };

    return (
        <>
            <div className="comments">
                {comments.slice(0, commentsSlice).map(
                    (comment) => (
                        <div className="inline-comment" key={comment.id}>
                            <img src={avatar} alt="Avatar img"/>
                            <span className="span-bold">{comment.author}</span>
                            <span>{comment.message}</span>
                        </div>
                    ))}
                {comments.length >= 3 && commentsSlice < comments.length && (
                    <button
                        type="button"
                        onClick={showNextComments}
                        onKeyDown={(event) => {
                            if (event.key === 'Enter') {
                                showNextComments();
                            }
                        }}
                    >
                        View more comments
                    </button>
                )}
            </div>
            <AddComment/>
        </>
    );
}

export default Comments;