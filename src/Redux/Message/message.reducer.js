import * as actionType from "./message.actionType";

const initialState = {
    messages: [],
    chats: [],
    loading: false,
    error: null,
    message: null,
};

export const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.CREATE_MESSAGE_REQUEST:
        case actionType.CREATE_CHAT_REQUEST:
        case actionType.GET_ALL_CHAT_REQUEST:
            return { ...state, error: null, loading: false };
        case actionType.CREATE_MESSAGE_SUCCESS:
            return {
                ...state,
                message: action.payload,
            };
        case actionType.CREATE_CHAT_SUCCESS:
            return {
                ...state,
                chats: [action.payload, ...state.chats],
            };
        case actionType.GET_ALL_CHAT_SUCCESS:
            return {
                ...state,
                chats: actionType.payload,
            };
        case actionType.CREATE_MESSAGE_FAILURE:
        case actionType.CREATE_CHAT_FAILURE:
        case actionType.GET_ALL_CHAT_FAILURE:
            return { ...state, error: action.payload, loading: false };

        default:
            return state;
    }
};
