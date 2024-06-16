import * as actionType from "./auth.actionType";

const initialState = {
    jwt: null,
    error: null,
    loading: false,
    user: null,
    searchUsers: [],
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.LOGIN_REQUEST:
        case actionType.REGISTER_REQUEST:
        case actionType.GET_PROFILE_REQUEST:
            return { ...state, loading: true, error: null };

        case actionType.LOGIN_SUCCESS:
        case actionType.REGISTER_SUCCESS:
            console.log("LOGIN_SUCCESS, payload: ", action.payload);
            return {
                ...state,
                jwt: action.payload,
                loading: false,
                error: null,
            };

        case actionType.GET_PROFILE_SUCCESS:
        case actionType.UPDATE_PROFILE_SUCCESS:
            return {
                ...state,
                user: action.payload,
                error: null,
                loading: false,
            };
        case actionType.SEARCH_USER_SUCCESS:
            return {
                ...state,
                searchUsers: action.payload,
                error: null,
                loading: false,
            };

        case actionType.LOGIN_FAILURE:
        case actionType.REGISTER_FAILURE:
        case actionType.GET_PROFILE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
};
