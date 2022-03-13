import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllQuestions, deleteQuestion } from '../../store/question';
import './Questions.css';


const Questions = () => {
    const dispatch = useDispatch();
    const questionList = useSelector((state) => Object.values(state.question).reverse());

    // const answerList = useSelector((state) => Object.values(state.answer));
    // console.log('***********', answerList);

    const sessionUser = useSelector(state => state.session.user);

    useEffect(() => {
        dispatch(getAllQuestions());
    }, [dispatch]);

    const handleDelete = (id) => {

        //  Dispatch the return value of the thunk creator
        dispatch(deleteQuestion(id));
    };

    return (
        <>
            <div className="question-display">
                <h1>Questions</h1>
                <Link to="/questions/new"><button type='button'>Enter A Question</button></Link>
                <hr></hr>
                {questionList?.map(({ id, userId, title, imageUrl, description }) => (
                    <div>
                        <p className="question-title" bold key={id}>{title}</p>
                        <div className="question-image"><img key={id} src={imageUrl} /></div>
                        <p key={id}>{description}</p>
                        <Link to={`/answers/${id}`}><button type='button'>Read Answers</button></Link>
                        {sessionUser.id === userId ? <Link to={`/questions/${id}/update`}><button type='button'>Update your Question</button></Link> : null}
                        {sessionUser.id === userId ? <button type='button' onClick={() => handleDelete(id)}>Delete your Question</button> : null}
                        {sessionUser.id === userId ? null : <Link to={`/answers/${id}/new`}><button type='button'>Answer the Question</button></Link>}
                        < hr ></hr>
                    </div>
                ))
                }
            </div >

        </>
    );
};

export default Questions;
