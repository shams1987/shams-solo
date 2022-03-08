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

            <h1>Questions</h1>
            {questionList?.map(({ id, title, imageUrl, description }) => (
                <div>
                    <p key={id}>{title}</p>
                    <img src={imageUrl} />
                    <p key={id}>{description}</p>
                    <hr></hr>
                </div>
            ))
            }

        </>
    );
};

export default Questions;
