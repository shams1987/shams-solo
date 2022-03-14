import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateQuestion } from "../../store/question";
import { useHistory } from 'react-router-dom';
import { useParams } from "react-router-dom";
import "./QuestionUpdate.css"



const QuestionUpdate = () => {

    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);

    const history = useHistory();

    const { id } = useParams();
    const question = useSelector((state) => state.question[id]);

    const [title, setTitle] = useState(question.title);
    const [imageUrl, setImageUrl] = useState(question.imageUrl);
    const [description, setDescription] = useState(question.description);

    const updateTitle = (e) => setTitle(e.target.value);
    const updateImageUrl = (e) => setImageUrl(e.target.value);
    const updateDescription = (e) => setDescription(e.target.value);
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        const validationErrors = [];
        if (!title) validationErrors.push("Please add a Title");
        if (!imageUrl) validationErrors.push("Please add an Image URL");
        if (!description) validationErrors.push("Please add Description");
        setErrors(validationErrors);
    }, [title, imageUrl, description]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newQuestion = {
            id: question.id,
            userId: sessionUser.id,
            title,
            imageUrl,
            description
        };
        //  Dispatch the return value of the thunk creator
        const questionData = await dispatch(updateQuestion(newQuestion));
        if (questionData) history.push('/questions');
    };
    const handleCancelClick = () => {
        history.push('/questions');
    }
    return (
        <div className="upd-question">
            <h1>Update Your Question</h1>
            <ul>
                {errors.map(error => (<li key={error} id="error">{error}</li>
                ))}
            </ul>
            <form onSubmit={handleSubmit}>
                <label> Question Title:
                    <input id="upd-question-title"
                        type="text"
                        value={title}
                        onChange={updateTitle}
                        placeholder="Title"
                        name="title"
                    />
                </label>
                <label> Image URL:
                    <input
                        type="text" id="upd-question-image"
                        value={imageUrl}
                        onChange={updateImageUrl}
                        placeholder="Image URL"
                        name="imageUrl"
                    />
                </label>
                <label> Description:
                    <textarea id="upd-question-description"
                        value={description}
                        name="description"
                        onChange={updateDescription}
                        placeholder="Description"
                        rows="10"
                    ></textarea>
                </label>
                <button id="upd-question-btn" type="submit" disabled={errors.length > 0}>Update</button>
                <button id="upd-question-cancel" type="button" onClick={handleCancelClick}>Cancel</button>
            </form>
        </div>
    );
};

export default QuestionUpdate;
