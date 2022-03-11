import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAnswers, deleteAnswer } from '../../store/answer';
import { useParams } from "react-router-dom";


const Answers = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const question = useSelector((state) => state.question[id]);
    const answerList = useSelector((state) => Object.values(state.answer).reverse());
    const sessionUser = useSelector(state => state.session.user);


    useEffect(() => {
        dispatch(getAnswers(id));
    }, [dispatch]);

    const handleDelete = (id) => {

        //  Dispatch the return value of the thunk creator
        dispatch(deleteAnswer(id));
    };

    return (
        <>
            <h1>Question</h1>
            <div>
                <p key={id}>{question.title}</p>
                <img src={question.imageUrl} />
                <p key={id}>{question.description}</p>
            </div>
            <hr></hr>
            <h1>Answers</h1>
            {answerList?.map(({ id, userId, questionId, answer }) => (
                <div>
                    <p key={id}>{answer}</p>
                    {sessionUser.id === userId ? <button type='button' onClick={() => handleDelete(id)}>Delete your Answer</button> : null}
                    <hr></hr>
                </div>
            ))
            }

        </>
    );
};

export default Answers;
