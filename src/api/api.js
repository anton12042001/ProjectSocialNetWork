import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/" ,
    headers: {
        "API-KEY" : "7f75f8a4-3039-43de-b2f9-7a89f715cf43"
    }

})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,)
            .then(response => {
                return response.data
            })
    }
}

// export const follow = (u) => {
//     instance.post(`follow/${u.id}`, {},)
//         .then(response => {
//         return response.data
//     })
// }
// export const unfollow = (u) => {
//     instance.delete(`follow/${u.id}`,)
//         .then(response => {
//         return response.data
//     })
// }