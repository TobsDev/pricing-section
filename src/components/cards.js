import React from 'react';
import Card from './card';
import jsonData from "../../content/pricingData";

const Cards = (props) => (

    <div className="cards">
        {jsonData.cards.map((card) => {
            return <Card 
                    package={card.package}
                    price={card.price[props.pricing]}
                    storage={card.storage}
                    users={card.users}
                    upload={card.upload}
                    active={card.active ? "card--active" : null}
                    cta={jsonData.cta}
                />
        })}
    </div>
    
)

export default Cards