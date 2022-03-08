import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllQuestions } from '../store/question';

const Questions = () => {
    const dispatch = useDispatch();
    const questionList = useSelector((state) => Object.values(state.question));
    console.log(questionList);

    useEffect(() => {
        dispatch(getAllQuestions());
    }, [dispatch]);

    return (
        <>
            <h1>Question List</h1>
            {questionList?.map(({ id, title }) => (
                <p key={id}>{title}</p>
            ))}
        </>
    );
};

export default Questions;
