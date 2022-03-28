import React, { useEffect, useState } from 'react';


const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts);
    })


    return (
        <>
            <section className='shop-container'>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-9">
                        <h2>This is product area</h2>

                        </div>
                        <div className="col-lg-3">
                            <div className="cart-area text-center">
                            <h3>Order Summary</h3>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>
      
        </>
    );
};

export default Shop;