import React, {useState} from "react";

function AddComment() {
    const [comment, setComment] = useState('');

    return (
        <div className="add-comment">
            <form className="form-wrapper">
                <input
                    aria-label="Add a comment"
                    autoComplete="off"
                    type="text"
                    name="add-comment"
                    placeholder="Add a comment..."
                    value={comment}
                    onChange={({target}) => setComment(target.value)}
                />
                <button
                    className={`${!comment && 'opacity-25'}`}
                    type="button"
                    disabled={comment.length < 1}
                >
                    Post
                </button>
            </form>
        </div>
    );
}

export default AddComment;