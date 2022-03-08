import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllQuestions } from '../store/question';

const Questions = () => {
    const dispatch = useDispatch();
    const questionList = useSelector((state) => Object.values(state.question));

    const sessionUser = useSelector(state => state.session.user);

    useEffect(() => {
        dispatch(getAllQuestions());
    }, [dispatch]);

    return (
        <>
            <button type='button'>Create a Question</button>
            <hr></hr>
            <h1>Questions</h1>
            {questionList?.map(({ id, userId, title, imageUrl, description }) => (
                <div>
                    <p key={id}>{title}</p>
                    <img src={imageUrl} />
                    <p key={id}>{description}</p>
                    {sessionUser.id === userId ? <button type='button'>Update</button> : null}
                    {sessionUser.id === userId ? <button type='button'>Delete</button> : null}
                    {sessionUser.id === userId ? null : <button type='button'>Answer</button>}
                    <hr></hr>
                </div>
            ))
            }

        </>
    );
};

export default Questions;
