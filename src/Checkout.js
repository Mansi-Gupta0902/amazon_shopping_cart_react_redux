import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";

function Checkout()
{
    const[{basket}]=useStateValue();
    return(
        <div className="checkout">
            <img className="add" src="https://1.bp.blogspot.com/-cRnBtYAbVPo/WwJsJmAeSQI/AAAAAAAAB4Y/p2RNvNp_7u0yIutK8IPy0STbBaUWEhwLQCLcBGAs/s1600/Untitled.png" alt="" />
            {
                basket?.length===0? 
                (<div>
                    <h2>Your amazon basket is empty</h2>
                </div>):
                (<div>
                    <h2>Your shopping basket</h2>

                    {/* List of all products */}
                    {basket.map(item=>(
                        <CheckoutProduct
                        id={item.id} 
                        title={item.title} 
                        image={item.image} 
                        price={item.price} 
                        rating={item.rating}
                        />
                    ))}

                    
                </div>)
            }
        </div>
    )
}
export default Checkout;