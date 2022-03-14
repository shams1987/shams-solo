import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postQuestion } from "../../store/question";
import { useHistory } from 'react-router-dom';
import "./QuestionInput.css";

const QuestionInput = () => {
    const dispatch = useDispatch();

    const [title, setTitle] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [description, setDescription] = useState("");
    const sessionUser = useSelector(state => state.session.user);
    const [errors, setErrors] = useState([]);

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

        if ((title) && (imageUrl) && (description)) {

            //  Dispatch the return value of the thunk creator
            dispatch(postQuestion(newQuestion));
            reset();
            history.push('/questions');
            return
        }
        else {
            if (!title) { setErrors(["Please preovide a TITLE for the questions"]) };
            if (!imageUrl) { setErrors(["Please provide a valid IMAGE URL"]) };
            if (!description) { setErrors(["Please provide a DESCRIPTION for the question you have"]) };
        }

    };
    const handleCancelClick = () => {
        history.push('/questions');
    };

    return (
        <div className="add-question">
            <h1>Question?</h1>
            <ul>
                {errors.map(error => (<li key={error} id="error">{error}</li>
                ))}
            </ul>
            <form onSubmit={handleSubmit}>
                <label> Question Title:
                    <input id="add-question-title"
                        type="text"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        placeholder="Title"
                        name="title"
                    />
                </label>
                <label> Image URL:
                    <input id="add-question-image"
                        type="text"
                        onChange={(e) => setImageUrl(e.target.value)}
                        value={imageUrl}
                        placeholder="Image URL"
                        name="imageUrl"
                    />
                </label>
                <label> Description:
                    <textarea id="add-question-description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        name="description"
                        placeholder="Description"
                        rows="10"
                    ></textarea>
                </label>
                <button id="add-question-btn" type="submit" >Submit</button>
                <button id="add-question-cancel" type="button" onClick={handleCancelClick}>Cancel</button>
            </form>
        </div>
    );
};

export default QuestionInput;
