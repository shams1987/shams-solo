import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAnswer } from "../../store/answer";
import { useHistory } from 'react-router-dom';

const AnswerInput = () => {
    const dispatch = useDispatch();

    const [answer, setAnswer] = useState("");
    const sessionUser = useSelector(state => state.session.user);

    const history = useHistory();

    const reset = () => {
        setAnswer("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newAnswer = {
            userId: sessionUser.id,
            answer
        };

        //  Dispatch the return value of the thunk creator
        dispatch(postAnswer(newAnswer));
        reset();
        history.push('/answers');
    };

    return (
        <div className="inputBox">
            <h1>Answer</h1>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    name="answer"
                    placeholder="Answer"
                    rows="10"
                ></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AnswerInput;
