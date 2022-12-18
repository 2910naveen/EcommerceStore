import { ActionTypes} from "../constants/action-types";
import { fakeApiCalls } from "../../apis/fakeApis";

export const fetchProducts = ()=>async (dispatch)=>{

  const response = await fakeApiCalls.get('/products').catch((err)=>{console.log("Err:"+err)});
  console.log(response);
  dispatch({type:ActionTypes.FETCH_PRODUCTS,payload:response.data})

};

export const fetchSelectedProduct = (id)=>async (dispatch)=>{
  const response = await fakeApiCalls.get(`/products/${id}`).catch((err)=>{console.log("Err:"+err)});
  dispatch({type:ActionTypes.FETCH_SELECTEDPRODUCT,payload:response.data})
}
export const setproducts = (products)=>
{
   console.log(products);
    return {
             type:ActionTypes.SET_PRODUCTS,
             payload:products
           };
};

export const selectedproduct = (product)=>
{
  console.log(product);
    return {
             type:ActionTypes.SELECTED_PRODUCT,
             payload:product
           };
};

export const removeProduct = ()=>{
  return {
           type:ActionTypes.REMOVE_SELECTED_PRODUCT,
           payload:{}
  };
};


