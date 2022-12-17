import React from 'react';
import { connect } from 'react-redux';
import ProductComponent from './ProductComponent';
import { fetchProducts } from '../redux/actions/productActions';

//the async function returns the result as a promise , 
//which needs to be handled in place where it is received.like in component did mount
// async function fetchProducts()
//     {
//         let result;
//         await axios.get("https://fakestoreapi.com/products")
//         .then(response=>{result = response.data})
//         .catch((err)=>{
//             console.log("Err",err);
//                         });
//         return result;
//     };

class ProductListing extends React.Component
{
    componentDidMount()
    {
        // const response = fetchProducts();
        // //handling the result which is returned from the async function.
        // response.then(result=>{this.props.dispatchallProducts(result)});

        //now we are fetching these products in asynchronous action creators using thunk middleware.
        this.props.dispatchfetchProducts();

    }

    
    render()
    {
        return (
            <div className="ui grid container">
              <ProductComponent />
            </div>
        );
    }
};

const mapDispatchToProps = (dispatch)=>{
     return {
            // dispatchallProducts:(products)=> dispatch(setproducts(products)),
            dispatchfetchProducts:()=>dispatch(fetchProducts())
     };
};
const mapStateToProps = (state)=>{
    return {
        products:state.allproducts.products
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(ProductListing);


