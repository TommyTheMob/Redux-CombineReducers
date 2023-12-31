import { createStore, combineReducers } from "redux";
import counterReducer  from "./counter/counter.reducer";
import usersReducer  from "./users/users.reducer";

const appReducer = combineReducers({
    counter: counterReducer,
    users: usersReducer
})

const store = createStore(
    appReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store