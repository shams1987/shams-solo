import { useState } from "react";
import { useDispatch } from "react-redux";
import { postQuestion } from "../../store/question";

const QuestionInput = () => {
    const dispatch = useDispatch();

    const [title, setTitle] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [description, setDescription] = useState("");

    const reset = () => {
        setTitle("");
        setImageUrl("");
        setDescription("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newQuestion = {
            title,
            imageUrl,
            description
        };

        // 8. Dispatch the return value of the thunk creator instead (the thunk)
        dispatch(postQuestion(newQuestion));
        reset();
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
            </form>
        </div>
    );
};

export default QuestionInput;
