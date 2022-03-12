import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postQuestion } from "../../store/question";
import { useHistory } from 'react-router-dom';

const QuestionInput = () => {
    const dispatch = useDispatch();

    const [title, setTitle] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [description, setDescription] = useState("");
    const sessionUser = useSelector(state => state.session.user);

    const history = useHistory();

    const reset = () => {
        setTitle("");
        setImageUrl("");
        setDescription("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newQuestion = {
            userId: sessionUser.id,
            title,
            imageUrl,
            description
        };

        //  Dispatch the return value of the thunk creator
        dispatch(postQuestion(newQuestion));
        reset();
        history.push('/questions');
    };
    const handleCancelClick = () => {
        //e.preventDefault();
        //setErrorMessages({});
        //hideForm();
        history.push('/questions');
    };

    return (
        <div className="inputBox">
            <h1>Create Question</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    placeholder="Title"
                    name="title"
                />
                <input
                    type="text"
                    onChange={(e) => setImageUrl(e.target.value)}
                    value={imageUrl}
                    placeholder="Image URL"
                    name="imageUrl"
                />
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    name="description"
                    placeholder="Description"
                    rows="10"
                ></textarea>
                <button type="submit">Submit</button>
                <button type="button" onClick={handleCancelClick}>Cancel</button>
            </form>
        </div>
    );
};

export default QuestionInput;
