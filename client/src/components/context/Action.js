export const LoginStart = () => ({
    type: "LOGIN_START",
})

export const LoginSuccess = () => ({
    type: "LOGIN_SUCCESS",
    payload: user,
})

export const LoginFailure = () => ({
    type: "LOGIN_FAILURE",
    payload: errorNotification,
})

export const UpdateStart = () => ({
    type: "UPDATE_START",
})

export const UpdateSuccess = () => ({
    type: "UPDATE_SUCCESS",
    payload: user,
})

export const UpdateFailure = () => ({
    type: "UPDATE_FAILURE",
    payload: errorNotification,
})

export const Logout = () => ({
    type: "LOGOUT",
})