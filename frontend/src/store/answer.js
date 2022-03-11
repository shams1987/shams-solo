import { csrfFetch } from './csrf';

// constant to avoid debugging typos
const GET_ANSWERS = 'Answer/getAnswers';
const ADD_ANSWER = 'Answer/addAnswer';
const REMOVE_ANSWER = 'Answer/removeAnswer';
const UPDATE_ANSWER = 'Answer/updateAnswer';

// action creator Read
const loadAnswers = (answers) => {
    return {
        type: GET_ANSWERS,
        answers
    };
};

// action creator for Create
export const addAnswer = (newAnswer) => ({
    type: ADD_ANSWER,
    newAnswer
});

// action creator for Delete
const removeAnswer = (answerId) => ({
    type: REMOVE_ANSWER,
    answerId
});

// Action Creator for Update
export const update = (newAnswer) => ({
    type: UPDATE_ANSWER,
    newAnswer
});

// thunk for Read
export const getAnswers = (questionId) => async (dispatch) => {
    const response = await csrfFetch(`/api/answers/${questionId}`);

    if (response.ok) {
        const data = await response.json();

        dispatch(loadAnswers(data));
        return data;
    }
};

// thunk for Create
export const postAnswer = (data) => async dispatch => {
    const res = await csrfFetch('/api/answers', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
    const newAnswer = await res.json()
    dispatch(addAnswer(newAnswer))
    return newAnswer;
};

// thunk for DELETE
export const deleteAnswer = (answerId) => async dispatch => {
    const response = await csrfFetch(`/api/answers/${answerId}`, {
        method: 'delete',
    });

    if (response.ok) {
        const { id: deletedAnswerId } = await response.json();
        dispatch(removeAnswer(deletedAnswerId));
        return deletedAnswerId;
    }
};

// thunk action creator for UPDATE
export const updateAnswer = (data) => async dispatch => {
    const response = await csrfFetch(`/api/answers/${data.id}`, {
        method: 'put',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    if (response.ok) {
        const answer = await response.json();
        dispatch(update(answer));
        return answer;
    }
};


// state object
const initialState = {};

// reducer
const answersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ANSWERS: {
            const newState = {};
            action.answers.forEach((answer) => (newState[answer.id] = answer));
            return newState;
        }
        case ADD_ANSWER:
            return {
                ...state,
                entries: { ...state.entries, [action.newAnswer.id]: action.newAnswer }
            };
        case REMOVE_ANSWER:
            const newState = { ...state };
            delete newState[action.answerId];
            return newState;
        case UPDATE_ANSWER:
            return {
                ...state,
                [action.newAnswer.id]: action.newAnswer
            };
        default:
            return state;
    }
};

export default answersReducer;
