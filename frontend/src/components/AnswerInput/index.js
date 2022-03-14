import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAnswer, getAnswers } from "../../store/answer";
import { useHistory } from 'react-router-dom';
import { useParams } from "react-router-dom";

import "./AnswerInput.css"

const AnswerInput = () => {
    const dispatch = useDispatch();

    const [answer, setAnswer] = useState("");

    const sessionUser = useSelector(state => state.session.user);
    const { id } = useParams();
    const history = useHistory();

    // front end validations
    const [errors, setErrors] = useState([]);

    const reset = () => {
        setAnswer("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newAnswer = {
            questionId: id,
            userId: sessionUser.id,
            answer
        };
        if (answer) {
            //  Dispatch the return value of the thunk creator
            dispatch(postAnswer(newAnswer));
            reset();
            history.push(`/answers/${id}`);
            return
        }
        else {
            setErrors(["Please provide an answer or Cancel to go back"])
        }

    };
    const handleCancelClick = () => {
        history.push('/questions');
    }
    return (
        <div className="add-answer">
            <h1>Answer</h1>
            <ul>
                {errors.map(error => (<li key={error} id="error">{error}</li>
                ))}
            </ul>
            <form onSubmit={handleSubmit}>
                <textarea id="add-answer-description"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    name="answer"
                    placeholder="Answer"
                    rows="10"
                ></textarea>
                <button id="add-answer-btn" type="submit">Submit</button>
                <button id="add-answer-cancel" type="button" onClick={handleCancelClick}>Cancel</button>
            </form>
        </div>
    );
};

export default AnswerInput;
