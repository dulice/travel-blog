const Reducer = (state, action) => {
    switch (action.type) {
        case "LOGIN_START":
            return {
                user: null,
                isFetching: true,
                iserror: false,
            }
        case "LOGIN_SUCCESS":
            return {
                user: action.payload,
                isFetching: true,
                iserror: false,
            }
        case "LOGIN_FAILURE":
            return {
                user: null,
                isFetching: false,
                iserror: true,
                errorNotification: action.payload,
            }
        case "UPDATE_START":
            return {
                ...state,
                isFetching: true,
            }
        case "UPDATE_SUCCESS":
            return {
                user: action.payload,
                isFetching: true,
                iserror: false,
            }
        case "UPDATE_FAILURE":
            return {
                user: state.user,
                isFetching: false,
                iserror: true,
                errorNotification: action.payload,
            }
        case "LOGOUT":
            return {
                user: null,
                isFetching: false,
                iserror: false,
            }
        default:
            return state;
    }
}

export default Reducer;