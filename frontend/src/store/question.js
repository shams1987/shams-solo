import { csrfFetch } from './csrf';

// constant to avoid debugging typos
const GET_ALL_QUESTIONS = 'Question/getAllQuestions';
const ADD_QUESTION = 'Question/addQuestion';
const REMOVE_QUESTION = 'Question/removeQuestion';

//regular action creator
const loadQuestions = (questions) => {
    return {
        type: GET_ALL_QUESTIONS,
        questions
    };
};
export const addQuestion = (newQuestion) => ({
    type: ADD_QUESTION,
    newQuestion,
});

const removeQuestion = (questionId) => ({
    type: REMOVE_QUESTION,
    questionId
});

// thunk action creator for get
export const getAllQuestions = () => async (dispatch) => {
    const response = await csrfFetch('/api/questions');

    if (response.ok) {
        const data = await response.json();

        dispatch(loadQuestions(data));
        return data;
    }
};
// thunk action creator for POST request
export const postQuestion = (data) => async dispatch => {
    const res = await csrfFetch('/api/questions', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
    const newQuestion = await res.json()
    dispatch(addQuestion(newQuestion))
    return newQuestion;
}
// thunk action creator for DELETE request
export const deleteQuestion = (questionId) => async dispatch => {
    const response = await csrfFetch(`/api/questions/${questionId}`, {
        method: 'delete',
    });

    if (response.ok) {
        const { id: deletedQuestionId } = await response.json();
        dispatch(removeQuestion(deletedQuestionId));
        return deletedQuestionId;
    }
};

// state object
const initialState = {};

// reducer
const questionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_QUESTIONS: {
            const newState = {};
            action.questions.forEach((question) => (newState[question.id] = question));
            return newState;
        }
        case ADD_QUESTION:
            return {
                ...state,
                entries: { ...state.entries, [action.newQuestion.id]: action.newQuestion }
            };
        case REMOVE_QUESTION:
            const newState = { ...state };
            delete newState[action.questionId];
            return newState;
        default:
            return state;
    }
};

export default questionsReducer;
