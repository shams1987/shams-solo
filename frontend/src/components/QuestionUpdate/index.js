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
        if (title.length < 1) validationErrors.push("Please add an answer");
        if (imageUrl.length < 1) validationErrors.push("Please add an answer");
        if (description.length < 1) validationErrors.push("Please add an answer");
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
        <div className="update-question">
            <h1>Update Question</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={title}
                    onChange={updateTitle}
                    placeholder="Title"
                    name="title"
                />
                <input
                    type="text"
                    value={imageUrl}
                    onChange={updateImageUrl}
                    placeholder="Image URL"
                    name="imageUrl"
                />
                <textarea
                    value={description}
                    name="description"
                    onChange={updateDescription}
                    placeholder="Description"
                    rows="10"
                ></textarea>
                <button type="submit" disabled={errors.length > 0}>Update</button>
                <button type="button" onClick={handleCancelClick}>Cancel</button>
            </form>
        </div>
    );
};

export default QuestionUpdate;
