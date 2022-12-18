import React from 'react';
import {connect} from 'react-redux';
import { removeProduct, fetchSelectedProduct } from '../redux/actions/productActions';

// async function fetchSelectedProduct(paramId)
// {
//    const response = await axios.get(`https://fakestoreapi.com/products/${paramId}`).catch((err)=>{console.log("err",err)});
//    return response.data;
// }
class ProductDetails extends React.Component
{
   componentDidMount()
   {
     const paramId = window.location.href.split('/')[4];
     console.log(paramId);
    //  const result = fetchSelectedProduct(paramId);
    //  result.then(response=>this.props.dispatchSelectedProduct(response));

    //here we are dispatching one actioncreator which in turn does some asynchronous tasks using thunkmiddleware
    //default functions and returns the actionobject.
     this.props.dispatchFetchSelectedProduct(paramId);
     return this.props.dispatchRemoveSelectedProduct();
     
   }

   render()
   {
     const product = this.props.productdetails;
     const {title,image,category,price,description} = product;
     console.log(product);
     return (<div className="ui grid container">
               {Object.keys(product).length === 0 ? 
                (<div>...Loading</div>):
                (<div className="ui placeholder segment">
                  <div className="ui two column stackable center aligned grid">
                    <div className="ui vertical divider">AND</div>
                    <div className="middle aligned row">
                     <div className="column lp">
                        <img className="ui fluid image" src={image} alt="productimage" />
                     </div>
                     <div className="column rp">
                        <h1>{title}</h1>
                        <h2>
                            <a className="ui teal tag label" href="">${price}</a>
                        </h2>
                        <h3 className="ui brown block header">{category}</h3>
                        <p>{description}</p>
                        <div className="ui vertical animated button" tabIndex="0">
                         <div className="hidden content">
                            <i className="shop icon"></i>
                         </div>
                         <div className="visible content">Add to Cart</div>
                        </div>
                     </div>
                    </div>
                  </div>
                 </div>)}
             
            </div>)
   }
};

const mapStateToProps = (state)=>{
    return {
        productdetails:state.selectedproduct
    };
};

const mapDispatchToProps = (dispatch) =>{
    return {
        // dispatchSelectedProduct:(product)=>{dispatch(selectedproduct(product))},
        dispatchRemoveSelectedProduct:()=>{dispatch(removeProduct())},
        dispatchFetchSelectedProduct:(id)=>dispatch(fetchSelectedProduct(id))
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductDetails);