import {productReducer} from "./product";
import {userReducer} from "./user";
import {combineReducers} from "redux/es/redux";


export const allReducers = combineReducers({
	products : productReducer(),
	user: userReducer()
})
