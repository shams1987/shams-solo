import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAnswers, deleteAnswer } from '../../store/answer';
import { useParams } from "react-router-dom";
//import { Link } from 'react-router-dom';
import './Answer.css'


const Answers = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const answerList = useSelector((state) => Object.values(state.answer).reverse());
    const sessionUser = useSelector(state => state.session.user);

    // const questionList = useSelector((state) => Object.values(state.question));
    // const question = questionList[id - 1];


    useEffect(() => {
        dispatch(getAnswers(id));
    }, [dispatch]);

    const handleDelete = (id) => {
        //  Dispatch the return value of the thunk creator
        dispatch(deleteAnswer(id));
    };

    // this code goes is for the other button when I want the update answer work
    // {sessionUser.id === userId ? <Link to={`/answers/${id}/update`}><button type='button'>Update your Answer</button></Link> : null}

    // this code is for question detail on top of answer list
    // <h1>Question</h1>
    // <div>
    //     <p >{question.title}</p>
    //     <img src={question.imageUrl} />
    //     <p >{question.description}</p>
    // </div>
    // <hr></hr>

    return (
        <>
            <div className="answer-display">
                <h1>Answers</h1>
                {answerList.length === 0 ? <p>At this moment there are no Answers to this Question</p> : null}
                {answerList?.map(({ id, userId, questionId, answer }) => (
                    <div>
                        <p key={id}>{answer}</p>
                        {sessionUser.id === userId ? <button type='button' onClick={() => handleDelete(id)}>Delete your Answer</button> : null}
                        <hr></hr>
                    </div>
                ))
                }
            </div>
        </>
    );
};

export default Answers;
