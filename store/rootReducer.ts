import { combineReducers } from "redux";
import { PillReducer } from "./slices/PillSlice";

const rootReducer = combineReducers({
    pill: PillReducer    
});

export default rootReducer