import { api } from "../../config/api";

import * as actionType from "./post.actionType";

export const createPostAction = (postData) => async (dispatch) => {
    dispatch({ type: actionType.CREATE_POST_REQUEST });
    try {
        const { data } = await api.post("api/post", postData);
        dispatch({ type: actionType.CREATE_POST_SUCCESS, payload: data });
        console.log("created post: ", data);
    } catch (error) {
        console.log("error ", error);
        dispatch({ type: actionType.CREATE_POST_FAILURE, payload: error });
    }
};

export const getAllPostAction = () => async (dispatch) => {
    dispatch({ type: actionType.GET_ALL_POST_REQUEST });
    try {
        const { data } = await api.get("api/post");
        dispatch({ type: actionType.GET_ALL_POST_SUCCESS, payload: data });
        // console.log("all post: ", data);
    } catch (error) {
        console.log("error ", error);
        dispatch({ type: actionType.GET_ALL_POST_FAILURE, payload: error });
    }
};

export const getUsersPostAction = (userId) => async (dispatch) => {
    dispatch({ type: actionType.GET_USER_POSTS_REQUEST });
    try {
        const { data } = await api.get(`api/post/user/${userId}`);
        dispatch({ type: actionType.GET_USER_POSTS_SUCCESS, payload: data });
        console.log("user posts: ", data);
    } catch (error) {
        console.log("error ", error);
        dispatch({ type: actionType.GET_USER_POSTS_FAILURE, payload: error });
    }
};

// like post
export const likePostAction = (postId) => async (dispatch) => {
    dispatch({ type: actionType.LIKE_POST_REQUEST });
    try {
        const { data } = await api.put(`api/post/like/${postId}`);
        dispatch({ type: actionType.LIKE_POST_SUCCESS, payload: data });
        console.log("like post: ", data);
    } catch (error) {
        console.log("error ", error);
        dispatch({ type: actionType.LIKE_POST_FAILURE, payload: error });
    }
};

// Create comment
export const createCommentAction = (reqData) => async (dispatch) => {
    dispatch({ type: actionType.CREATE_COMMENT_REQUEST });
    try {
        const { data } = await api.post(
            `api/comment/post/${reqData.postId}`,
            reqData.data,
        );
        dispatch({ type: actionType.CREATE_COMMENT_SUCCESS, payload: data });
        console.log("created comment: ", data);
    } catch (error) {
        console.log("error ", error);
        dispatch({ type: actionType.CREATE_COMMENT_FAILURE, payload: error });
    }
};
