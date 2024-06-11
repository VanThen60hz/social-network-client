import { api } from "../../config/api";

import {
    CREATE_POST_FAILURE,
    CREATE_POST_REQUEST,
    CREATE_POST_SUCCESS,
    GET_ALL_POST_FAILURE,
    GET_ALL_POST_REQUEST,
    GET_ALL_POST_SUCCESS,
    GET_USER_POSTS_FAILURE,
    GET_USER_POSTS_REQUEST,
    GET_USER_POSTS_SUCCESS,
    LIKE_POST_FAILURE,
    LIKE_POST_REQUEST,
    LIKE_POST_SUCCESS,
} from "./post.actionType";

export const createPostAction = (postData) => async (dispatch) => {
    dispatch({ type: CREATE_POST_REQUEST });
    try {
        const { data } = await api.post("api/post", postData);
        dispatch({ type: CREATE_POST_SUCCESS, payload: data });
        console.log("created post: ", data);
    } catch (error) {
        console.log("error ", error);
        dispatch({ type: CREATE_POST_FAILURE, payload: error });
    }
};

export const getAllPostAction = () => async (dispatch) => {
    dispatch({ type: GET_ALL_POST_REQUEST });
    try {
        const { data } = await api.get("api/post");
        dispatch({ type: GET_ALL_POST_SUCCESS, payload: data });
        console.log("all post: ", data);
    } catch (error) {
        console.log("error ", error);
        dispatch({ type: GET_ALL_POST_FAILURE, payload: error });
    }
};

export const getUsersPostAction = (userId) => async (dispatch) => {
    dispatch({ type: GET_USER_POSTS_REQUEST });
    try {
        const { data } = await api.get(`api/post/user/${userId}`);
        dispatch({ type: GET_USER_POSTS_SUCCESS, payload: data });
        console.log("user posts: ", data);
    } catch (error) {
        console.log("error ", error);
        dispatch({ type: GET_USER_POSTS_FAILURE, payload: error });
    }
};

export const likePostAction = (postId) => async (dispatch) => {
    dispatch({ type: LIKE_POST_REQUEST });
    try {
        const { data } = await api.get(`api/post/like/${postId}`);
        dispatch({ type: LIKE_POST_SUCCESS, payload: data });
        console.log("like post: ", data);
    } catch (error) {
        console.log("error ", error);
        dispatch({ type: LIKE_POST_FAILURE, payload: error });
    }
};
