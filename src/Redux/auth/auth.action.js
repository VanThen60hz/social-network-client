import axios from "axios";
import { API_BASE_URL, api } from "../../config/api";
import * as actionType from "./auth.actionType";

export const loginUserAction = (loginData) => async (dispatch) => {
    dispatch({ type: actionType.LOGIN_REQUEST });

    try {
        const { data } = await axios.post(
            `${API_BASE_URL}/auth/signin`,
            loginData.data,
        );

        if (data.token) {
            localStorage.setItem("jwt", data.token);
            dispatch({ type: actionType.LOGIN_SUCCESS, payload: data.token });
        }
    } catch (error) {
        console.log("--------------");
        dispatch({ type: actionType.LOGIN_FAILURE, payload: error });
    }
};

export const registerUserAction = (registerData) => async (dispatch) => {
    dispatch({ type: actionType.REGISTER_REQUEST });
    try {
        const { data } = await axios.post(
            `${API_BASE_URL}/auth/signup`,
            registerData.data,
        );

        if (data.token) {
            localStorage.setItem("jwt", data.token);
        }

        console.log("register", data);

        dispatch({ type: actionType.REGISTER_SUCCESS, payload: data.token });
    } catch (error) {
        console.log("--------------");
        dispatch({ type: actionType.REGISTER_FAILURE, payload: error });
    }
};

export const getProfileAction = (jwt) => async (dispatch) => {
    dispatch({ type: actionType.GET_PROFILE_REQUEST });

    try {
        const { data } = await axios.get(`${API_BASE_URL}/api/user/profile`, {
            headers: {
                Authorization: `Bearer ${jwt}`,
            },
        });
        console.log("profile: ", data);

        dispatch({ type: actionType.GET_PROFILE_SUCCESS, payload: data });
    } catch (error) {
        console.log("--------------");
        dispatch({ type: actionType.GET_PROFILE_FAILURE, payload: error });
    }
};

export const updateProfileAction = (reqData) => async (dispatch) => {
    dispatch({ type: actionType.UPDATE_PROFILE_REQUEST });
    try {
        const { data } = await api.patch("/api/user", reqData);
        console.log("update profile: ", data);

        dispatch({ type: actionType.UPDATE_PROFILE_SUCCESS, payload: reqData });
    } catch (error) {
        console.error("Update profile error: ", error);
        dispatch({
            type: actionType.UPDATE_PROFILE_FAILURE,
            payload: error.message,
        });
    }
};
