import { combineReducers, createStore } from "redux";
import { DatVeReducer } from "./reducers/DatVeReducer";
const rootReducer = combineReducers({
    DatVeReducer
});
export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());