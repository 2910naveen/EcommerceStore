import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class ProductComponent extends React.Component
{
    render()
    {
        const products = this.props.products;
        const renderList = products.map((product)=>{  
                                                             const {id,title,image,price,category} = product;
                                                              return (<div className="four wide column" key={id}>
                                                                      <Link to={`/product/${id}`} >
                                                                        <div className="ui link cards">
                                                                          <div className="card">
                                                                            <div className="image">
                                                                              <img src={image} alt={title}></img>
                                                                            </div>
                                                                            <div className="content">
                                                                              <div className="header">{title}</div> 
                                                                              <div className="meta price">${price}</div>
                                                                              <div className="meta">{category}</div>
                                                                            </div>
                                                                          </div>
                                                                        </div>
                                                                       </Link>
                                                                       </div>)}
        
        )
        return <>{renderList}</>
    };
};

const mapStateToProps = (state)=>{
    return{
        products:state.allproducts.products
    };
};

export default connect(mapStateToProps)(ProductComponent);