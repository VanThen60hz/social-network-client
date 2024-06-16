import { api } from "../../config/api";

import * as actionType from "./message.actionType";

export const createMessage = (message) => async (dispatch) => {
    dispatch({ type: actionType.CREATE_MESSAGE_REQUEST });
    try {
        const { data } = await api.post(`api/message`, message);
        console.log("created message: ", data);
        dispatch({
            type: actionType.CREATE_MESSAGE_SUCCESS,
            payload: data,
        });
    } catch (error) {
        console.log("CATCH ERROR: ", error);
        dispatch({
            type: actionType.CREATE_MESSAGE_FAILURE,
            payload: error,
        });
    }
};

export const createChat = (chat) => async (dispatch) => {
    dispatch({ type: actionType.CREATE_CHAT_REQUEST });
    try {
        const { data } = await api.post(`api/chat`, chat);
        console.log("created chat: ", data);
        dispatch({
            type: actionType.CREATE_CHAT_SUCCESS,
            payload: data,
        });
    } catch (error) {
        console.log("CATCH ERROR: ", error);
        dispatch({
            type: actionType.CREATE_CHAT_FAILURE,
            payload: error,
        });
    }
};

export const getAllChat = (chat) => async (dispatch) => {
    dispatch({ type: actionType.GET_ALL_CHAT_REQUEST });
    try {
        const { data } = await api.post(`api/chat`, chat);
        console.log("get all chat: ", data);
        dispatch({
            type: actionType.GET_ALL_CHAT_SUCCESS,
            payload: data,
        });
    } catch (error) {
        console.log("CATCH ERROR: ", error);
        dispatch({
            type: actionType.GET_ALL_CHAT_FAILURE,
            payload: error,
        });
    }
};
