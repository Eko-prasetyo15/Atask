// namespace
export const USERS = 'users';
export const REPO = 'repos';

const createUsersApiKey = (name: string) => `${USERS}/${name}`;

export const GET_USERS_API = createUsersApiKey('get-users-api');
export const GET_REPO_API = createUsersApiKey('get-repo-api');

