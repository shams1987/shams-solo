import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAnswers } from '../../store/answer';


const Answers = () => {
    const dispatch = useDispatch();
    const answerList = useSelector((state) => Object.values(state.answer));
    console.log('***********', answerList);
    // const sessionUser = useSelector(state => state.session.user);

    useEffect(() => {
        dispatch(getAnswers());
    }, [dispatch]);

    // const handleDelete = (id) => {

    //     //  Dispatch the return value of the thunk creator
    //     dispatch(deleteQuestion(id));
    // };

    return (
        <>
            <h1>Answers</h1>
            {answerList?.map(({ id, userId, answer }) => (
                <div>
                    <p key={id}>{answer}</p>
                    <hr></hr>
                </div>
            ))
            }

        </>
    );
};

export default Answers;
