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
    // const [errors, setErrors] = useState([]);

    const history = useHistory();


    // useEffect(() => {
    //     const validationErrors = [];
    //     if (title.length < 1) validationErrors.push("Please add an answer");
    //     if (imageUrl.length < 1) validationErrors.push("Please add an answer");
    //     if (description.length < 1) validationErrors.push("Please add an answer");
    //     setErrors(validationErrors);
    // }, [title, imageUrl, description]);

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
        <div className="add-question">
            <h1>Question?</h1>
            <form onSubmit={handleSubmit}>
                <label> Question Title:
                    <input id="add-question-title"
                        type="text"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        placeholder="Title"
                        name="title"
                        required
                    />
                </label>
                <label> Image URL:
                    <input id="add-question-image"
                        type="text"
                        onChange={(e) => setImageUrl(e.target.value)}
                        value={imageUrl}
                        placeholder="Image URL"
                        name="imageUrl"
                        required
                    />
                </label>
                <label> Description:
                    <textarea id="add-question-description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        name="description"
                        placeholder="Description"
                        required
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
