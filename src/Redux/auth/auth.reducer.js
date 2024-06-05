import {
    GET_PROFILE_FAILURE,
    GET_PROFILE_REQUEST,
    GET_PROFILE_SUCCESS,
    LOGIN_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    REGISTER_FAILURE,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
} from "./auth.actionType";

const initialState = {
    jwt: null,
    error: null,
    loading: false,
    user: null,
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
        case REGISTER_REQUEST:
        case GET_PROFILE_REQUEST:
            return { ...state, loading: true, error: null };

        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            console.log("LOGIN_SUCCESS, payload: ", action.payload);
            return {
                ...state,
                jwt: action.payload,
                loading: false,
                error: null,
            };

        case GET_PROFILE_SUCCESS:
            return {
                ...state,
                user: action.payload,
                error: null,
                loading: false,
            };

        case LOGIN_FAILURE:
        case REGISTER_FAILURE:
        case GET_PROFILE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
};
