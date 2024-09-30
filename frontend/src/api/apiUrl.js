export const BASE_URL = 'https://backend-app-q5lx.vercel.app'

export const endpoint = {
    auth:{
        LOGIN_USER : `${BASE_URL}/user/login`,
        REGISTER_USER : `${BASE_URL}/user/register`,
    },
    user:{
        USER_LIST : `${BASE_URL}/list/user`,
        USER_BY_ID : `${BASE_URL}/get/user/`,
        USER_ADD : `${BASE_URL}/add/users`,
        USER_UPDATE : `${BASE_URL}/update/users/`
    }
}
