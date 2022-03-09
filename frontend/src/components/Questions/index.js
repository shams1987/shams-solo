import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllQuestions, deleteQuestion } from '../../store/question';
import { useParams } from 'react-router-dom';


const Questions = () => {
    const dispatch = useDispatch();
    const questionList = useSelector((state) => Object.values(state.question));

    const sessionUser = useSelector(state => state.session.user);
    const { questionId } = useParams();

    useEffect(() => {
        dispatch(getAllQuestions());
    }, [dispatch]);

    const handleDelete = () => {
        //e.preventDefault();

        //  Dispatch the return value of the thunk creator
        dispatch(deleteQuestion(questionId));
    };

    return (
        <>
            <h1>Questions</h1>
            {questionList?.map(({ id, userId, title, imageUrl, description }) => (
                <div>
                    <p key={id}>{title}</p>
                    <img src={imageUrl} />
                    <p key={id}>{description}</p>
                    {sessionUser.id === userId ? <button type='button'>Update</button> : null}
                    {sessionUser.id === userId ? <button type='button' onClick={handleDelete}>Delete</button> : null}
                    {sessionUser.id === userId ? null : <button type='button'>Answer</button>}
                    <hr></hr>
                </div>
            ))
            }

        </>
    );
};

export default Questions;
