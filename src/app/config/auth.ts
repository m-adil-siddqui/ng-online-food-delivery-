export const setAuthenticateUser = (info:any) =>{
    localStorage.setItem('access_token', info.data.token);
    localStorage.setItem("_id", info.data.user._id)
    localStorage.setItem("full_name", info.data.user.full_name)
    localStorage.setItem("email", info.data.user.email)
}

export const getAuthenticateUser = () => {
    return {
        "access_token" : localStorage.getItem("access_token"),
        "_id"          : localStorage.getItem("_id"),
        "full_name"    : localStorage.getItem("full_name"),
        "email"        : localStorage.getItem("email"),
    }
}