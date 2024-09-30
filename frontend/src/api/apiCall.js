import axios from "axios";

const token = localStorage.getItem('auth')
export const Post = (path, data, header = {}) => {
    return axios.post(path, data, {
        headers: {
            "Content-Type": "application/json",
            ...(token && { "Authorization": `Bearer ${token}` }),
            ...header,
        },
    });
};

export const Get = (path, header = {}) => {
    return axios.get(path, {
        headers: {
            "Content-Type": "application/json",
            ...(token && { "Authorization": `Bearer ${token}` }),
            ...header,
        },
    });
};

export const Put = (path, data,header = {}) => {
    return axios.put(path, data, {
        headers: {
            "Content-Type": "application/json",
            ...(token && { "Authorization": `Bearer ${token}` }),
            ...header,
        },
    });
};

export const Delete = (path, header = {}) => {
    const token = localStorage.getItem("AuthToken");
    return axios.delete(path, {
        headers: {
            "Content-Type": "application/json",
            ...(token && { "Authorization": `Bearer ${token}` }),
            ...header,
        },
    });
};