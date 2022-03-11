import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateAnswer } from "../../store/answer";
import { updateQuestion } from "../../store/question";
import { useHistory } from 'react-router-dom';
import { useParams } from "react-router-dom";



const AnswerUpdate = () => {

    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);

    const history = useHistory();

    const { id } = useParams();
    const ansrObj = useSelector((state) => state.answer[id]);
    const question = useSelector((state) => state.question[id]);

    const [answer, setAnswer] = useState(ansrObj.answer);

    const updateAnsr = (e) => setAnswer(e.target.value);

    console.log('**************************', question.id);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newAnswer = {
            id: ansrObj.id,
            userId: sessionUser.id,
            questionId: question.id,
            answer
        };
        //  Dispatch the return value of the thunk creator
        const answerData = await dispatch(updateAnswer(newAnswer));
        if (answerData) history.push(`/answers/${question.id}`);
    };

    return (
        <div className="inputBox">
            <h1>Update Answer</h1>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={answer}
                    name="answer"
                    onChange={updateAnsr}
                    placeholder="Answer"
                    rows="10"
                ></textarea>
                <button type="submit">Update</button>
            </form>
        </div>
    );
};

export default AnswerUpdate;
