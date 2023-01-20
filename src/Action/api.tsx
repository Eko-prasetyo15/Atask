import axios from './Helper/axiosConfig'
import mapCache from './Helper/chace';
import { GET_USERS_API } from './Helper/chaceKey';

export const getListChaceApi = async () => {
    return mapCache.fetch({
        key: GET_USERS_API,
        callback: () =>
            axios.get(
                `https://api.github.com/search/users?q=`
            ),
        expiresInSeconds: 12000,
    });
};

export const getUsersApi = async (params: string) => {
    // const formatParam = (params) => {

    return axios.get(
        `https://api.github.com/search/users?q=${params}`)

};

export const getRepoApi = async (params: string) => {
    return axios.get(
        `https://api.github.com/users/${params}/repos`)

};
