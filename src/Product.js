import React from "react";
import "./Product.css";
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from "./StateProvider";

function Product({id,title,price,rating,image})
{
    const[{basket},dispatch]=useStateValue();
    // when add to basket button gets clicked this gets called
    const addToBasket=()=>{
        //Add item to baket
        dispatch({
            type: 'ADD_TO_BASKET',
            item:{
                id:id,
                title:title,
                price:price,
                rating:rating,
                image:image,
            }
        })
    }
    return(
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {
                        Array(rating)
                        .fill()
                        .map((_)=>(
                            <StarIcon className="product__star"/>
                        ))
                    }
                </div>
            </div>
            <img src={image} alt="" />
            <button onClick={addToBasket}>Add to basket</button>
        </div>
    )
}
export default Product;