
import { GET_USER_SUCCESS, GET_REPO_SUCCESS, IS_LOADING, IS_LOADING_REP } from '../Action/constant';
const INITIAL_STATE = {
    listUsers: [] as any[],
    listRepo: [] as any[],
    isLoading: false,
    isLoadingRep: false,
    count: 0
} as const;

export default (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case GET_USER_SUCCESS:
            return {
                ...state,
                listUsers: action.payload.res.data?.items,
                count: action.payload.res.data?.total_count,
            };
        case GET_REPO_SUCCESS:
            return {
                ...state,
                listRepo: action.payload.res.data,
            }
        case IS_LOADING:
            return { ...state, isLoading: action.data };
        case IS_LOADING_REP:
            return { ...state, isLoadingRep: action.data };
        default:
            return state;
    }
};
