import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllQuestions, deleteQuestion } from '../../store/question';


const Questions = () => {
    const dispatch = useDispatch();
    const questionList = useSelector((state) => Object.values(state.question));

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
            <h1>Questions</h1>
            <Link to="/questions/new"><button type='button'>Enter A Question</button></Link>
            {questionList?.map(({ id, userId, title, imageUrl, description }) => (
                <div>
                    <p key={id}>{title}</p>
                    <img src={imageUrl} />
                    <p key={id}>{description}</p>
                    {sessionUser.id === userId ? <Link to={`/questions/${id}/update`}><button type='button'>Update</button></Link> : null}
                    {sessionUser.id === userId ? <button type='button' onClick={() => handleDelete(id)}>Delete</button> : null}
                    {sessionUser.id === userId ? null : <button type='button'>Answer</button>}
                    <hr></hr>
                </div>
            ))
            }

        </>
    );
};

export default Questions;
