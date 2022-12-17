//when we create a project we have a no of reducers , to combine them we use this index.js
//we get this combinereducers from reduxcore.In this combine we will create key and value pairs for each reducer.

import {combineReducers} from "redux";
import { productReducer, selectedProductReducer } from "./productReducer";

const reducers = combineReducers({
    allproducts:productReducer,
    selectedproduct:selectedProductReducer
});

export default reducers;