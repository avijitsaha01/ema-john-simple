import React from 'react';
import './Product.css'
const Product = (props) => {
    const{name, img, price, seller, stoke} = props.product;
    return (
        <div className="product">
            <div className="img-wraper">
                <img src={img} alt=""/>
            </div>
            <div>
                <h4>{name}</h4>
                <p>Price ${price}</p>
                <p>so</p>
                <button 

                onClick={() => props.handleAddProduct(props.product)}
                
                >Buy Now</button>
            </div>
        </div>
    );
};

export default Product;