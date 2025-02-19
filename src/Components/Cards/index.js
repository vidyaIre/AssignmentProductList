import React from 'react'
//import productImg from './assets/productImages/image1.jpg'
const Cards = ({ productName, price, description, productImg }) => {
    return (
        <div>
            <div className="card"
                style={{
                    width: '18rem',
                    margin: '1rem',
                }}>
                <img
                    src={productImg}
                    className="card-img-top"
                    alt="product-image"
                    height={500}
                    // style={{
                    //     height: '100',
                    //     objectFit: 'contain'
                    // }}
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