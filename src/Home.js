import React from "react";
import "./Home.css";
import Product from "./Product";

function Home()
{
    return(
        <div className="home">
            <div className="home__row">
                <Product 
                id="1" 
                title="Mobile phone samsung" 
                price={11.96}
                rating={5}
                image="https://image.shutterstock.com/z/stock-photo-new-york-usa-november-brand-new-black-samsung-galaxy-s-plus-front-and-back-side-749782414.jpg"
                />
                <Product 
                id="1" 
                title="Mixer from amazon's choice included a juicer with exclusive offer" 
                price={11.89}
                rating={3}
                image="https://m.media-amazon.com/images/I/81x8874c6HL._SY450_.jpg"
                />
            </div>

            <div className="home__row">
                <Product 
                id="1" 
                title="Sofa set including 2 person's sittings" 
                price={50.91}
                rating={4}
                image="https://wakefit-co.s3.ap-south-1.amazonaws.com/img/sofa-sets/napper/regular/lifestyle/FOBL.jpg"
                />
                <Product 
                id="1" 
                title="Mobile phone samsung" 
                price={9.96}
                rating={2}
                image="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-bath-towels-1572897724.png?crop=1.00xw:0.724xh;0,0.215xh&resize=1200:*"
                />
                <Product 
                id="1" 
                title="Mobile phone samsung" 
                price={11.96}
                rating={5}
                image="https://image.shutterstock.com/z/stock-photo-new-york-usa-november-brand-new-black-samsung-galaxy-s-plus-front-and-back-side-749782414.jpg"
                />
            </div>
            
        </div>
    )
}
export default Home;