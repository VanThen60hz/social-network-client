import axios from "axios";
import { API_BASE_URL } from "../../config/api";
import {
    LOGIN_FAILURE,
    LOGIN_SUCCESS,
    REGISTER_FAILURE,
    REGISTER_SUCCESS,
} from "./auth.actionType";

export const loginUserAction = (loginData) => async (dispatch) => {
    try {
        console.log(loginData);
        const { data } = await axios.post(
            `${API_BASE_URL}/auth/signin`,
            loginData.data,
        );

        if (data.jwt) {
            localStorage.setItem("jwt", data.jwt);
        }

        console.log("login success", data);
        dispatch({ type: LOGIN_SUCCESS, payload: data.jwt });
    } catch (error) {
        console.log("--------------");
        dispatch({ type: LOGIN_FAILURE, payload: error });
    }
};

export const registerUserAction = (registerData) => async (dispatch) => {
    try {
        const { data } = await axios.post(
            `${API_BASE_URL}/auth/signup`,
            registerData.data,
        );

        if (data.jwt) {
            localStorage.setItem("jwt", data.jwt);
        }

        console.log("register", data);

        dispatch({ type: REGISTER_SUCCESS, payload: data.jwt });
    } catch (error) {
        console.log("--------------");
        dispatch({ type: REGISTER_FAILURE, payload: error });
    }
};
