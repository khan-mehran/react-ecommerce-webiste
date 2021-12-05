import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Button from '../../components/buttons/Button';

const Detail = () => {
    const [products, setProducts] = useState([])
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(respone => respone.json())
            .then(json => setProducts([...products, json]))
    }, [])

    return (
        <div style={{ paddingBottom: '50px' }}>
            <div className='container'>
                <div className='row'>
                    {
                        products.map((item, index) => {
                            return (
                                <>
                                    <div className='col-lg-5 mb-3' >
                                        <div className='card-wrap' key={index}>
                                            <img src={item.image} className='img-fluid' alt="shirt" />
                                        </div>
                                    </div>
                                    <div className='col-lg-7 py-5'>
                                        <div className="card-body">
                                            <p className="card-title">{item.description}</p>
                                            <h6>Price: ${item.price}</h6>
                                            <Button label='ADD TO CART' />
                                        </div>
                                    </div>
                                </>

                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Detail
