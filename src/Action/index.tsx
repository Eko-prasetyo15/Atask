// import axios from 'axios';
import { Dispatch } from 'react';
import {
    getUsersApi,
    getRepoApi,
    getListChaceApi
} from './api';
import {
    IS_LOADING,
    IS_LOADING_REP,
    GET_USER_SUCCESS,
    GET_REPO_SUCCESS,
    GET_CHACE_SUCCESS
} from './constant';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const isLoading = (data: boolean) => {
    return {
        type: IS_LOADING,
        data,
    };
};
export const isLoadingRep = (data: boolean) => {
    return {
        type: IS_LOADING_REP,
        data,
    };
};

export const getUserSuccess = (data: any) => {
    return {
        type: GET_USER_SUCCESS,
        payload: data,
    };
};
export const getRepoSuccess = (data: any) => {
    return {
        type: GET_REPO_SUCCESS,
        payload: data,
    };
};

export const getChaceSuccess = (data: any) => {
    return {
        type: GET_CHACE_SUCCESS,
        payload: data,
    };
};


export const getListChace = () => async (dispatch: Dispatch<any>) => {
    try {
        const resChace = await getListChaceApi();
        dispatch(getChaceSuccess({ resChace }));
    } catch (err) {
        console.log(err)
    }
};
export const getUser = (params: any) => async (dispatch: Dispatch<any>) => {
    try {
        dispatch(isLoading(true))
        const res = await getUsersApi(params);
        dispatch(getListChace())
        dispatch(getUserSuccess({ res }));
    } catch (error: any) {
        const err = error.response.data.errors[0]
        if (error.response.status === 400) {
            toast.error(err, { theme: "colored" })
        }
        else if (error.response.status === 500) {
            toast.error(err, { theme: "colored" })
        }
        else if (error.response.status === 401) {
            toast.error(err, { theme: "colored" })
        }
        else if (error.response.status === 403) {
            toast.error(err, { theme: "colored" })
        }
    }
    finally {
        setTimeout(() => {
            dispatch(isLoading(false));
        }, 3000);
    };
};

export const getRepo = (params: any) => async (dispatch: Dispatch<any>) => {
    try {
        dispatch(isLoadingRep(true))
        const res = await getRepoApi(params);
        dispatch(getRepoSuccess({ res }));
    } catch (error: any) {
        const err = error.response.data.errors[0]
        if (error.response.status === 400) {
            toast.error(err, { theme: "colored" })
        }
        else if (error.response.status === 500) {
            toast.error(err, { theme: "colored" })
        }
        else if (error.response.status === 401) {
            toast.error(err, { theme: "colored" })
        }
        else if (error.response.status === 403) {
            toast.error(err, { theme: "colored" })
        }
    }
    finally {
        setTimeout(() => {
            dispatch(isLoadingRep(false));
        }, 3000);
    };
};

