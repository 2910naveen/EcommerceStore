import { ActionTypes } from "../constants/action-types";

const initialStates = {
    products:[]
};

export const productReducer = (state=initialStates,{type,payload})=>{
    console.log("productreducer");
    switch(type)
    {
      case ActionTypes.SET_PRODUCTS:
          return {...state,products:payload};
      case ActionTypes.FETCH_PRODUCTS:
          return {...state,products:payload};
      default:
          return state;
         
    }
};

export const selectedProductReducer = (state={},{type,payload})=>{
    console.log("selected product reducer");
    switch(type)
    {
        case ActionTypes.SELECTED_PRODUCT:
            return {...state,...payload};
        case ActionTypes.FETCH_SELECTEDPRODUCT:
            return {...state,...payload};
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {};
        default:
            return state;
    };
};