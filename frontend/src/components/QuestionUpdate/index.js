import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateQuestion } from "../../store/question";
import { useHistory } from 'react-router-dom';
import { useParams } from "react-router-dom";



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

    const handleSubmit = (e) => {
        e.preventDefault();
        const newQuestion = {
            userId: sessionUser.id,
            title,
            imageUrl,
            description
        };
        //  Dispatch the return value of the thunk creator instead
        dispatch(updateQuestion(newQuestion));
        history.push('/questions');
    };

    return (
        <div className="inputBox">
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
                <button type="submit">Update</button>
            </form>
        </div>
    );
};

export default QuestionUpdate;
