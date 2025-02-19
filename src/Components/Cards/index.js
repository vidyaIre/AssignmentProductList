import React from 'react'
import productImages from '../../assets/productImages/'
const Cards = ({productName,price,description,productImage}) => {
    return (
        <div>
            <div className="card" style={{
                width: '18rem',
                margin: '1rem',
            }}>
                <img 
                    src="https://dummyimage.com/600x400/000/fff"
                    //src={productImages}
                    className="card-img-top"
                    alt="product-image"
                    style={{
                        height:'100',
                        objectFit:'contain'
                    }}
                />
                <div className="card-body">
                    <h5 className="card-title">{productName}</h5>
                    <p className="card-text">{description}</p>
                    <a href="#" className="btn btn-primary">Rs.{price}</a>
                </div>
            </div>
        </div>
    )
}

export default Cards