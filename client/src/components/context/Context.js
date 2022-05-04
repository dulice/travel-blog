import { createContext, useEffect, useReducer } from "react"
import Reducer from "./Reducer"

const initialState = {
    user: localStorage.getItem('user'),
    isFetching: false,
    iserror: false,
    errorNotification: null,
}

export const Context = createContext( initialState);

export const ContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, initialState);

    useEffect(() => {
        localStorage.setItem('user', state.user);
    },[state.user]);
    return (
        <Context.Provider
            value={{
                user: state.user,
                isFetching: state.isFetching,
                iserror: state.iserror,
                errorNotification: state.errorNotification,
                dispatch,
            }}
        >
            {children}
        </Context.Provider>
    )
}