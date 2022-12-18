import { combineReducers } from "redux";
import appDataReducer from "./appDataReducer";

import authReducer from "./authReducers";
import categoryReducer from "./categoryReducer";

const reducers = combineReducers({
  authState: authReducer,
  categoryState: categoryReducer,
  appDataState: appDataReducer,
});
export default reducers;
