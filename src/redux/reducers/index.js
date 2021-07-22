import { combineReducers } from "redux";
import { productReducer } from "./productReducer";

const reducer = combineReducers({
  allReducers: productReducer
} )

export default reducer