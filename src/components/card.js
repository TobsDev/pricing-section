import React from 'react';

const Card = (props) => (
    <div className={`card ${props.active} card__${props.package.toLowerCase()}`}>
      <h2 className="card__package">{props.package}</h2>
      <h3 className="card__price"><span className="card__currency">$ </span>{props.price}</h3>
      <table className="card__table">
        <tr>
            <td className="card__storage">{`${props.storage} Storage`}</td>
        </tr>
        <tr>
            <td className="card__users">{`${props.users} Users Allowed`}</td>
        </tr>
        <tr>
            <td className="card__upload">{`Send up to ${props.upload} GB`}</td> 
        </tr>
      </table>
      <button className="card__cta">{props.cta}</button>
    </div>
)

export default Card