import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';
import Button from '../../components/buttons/Button';

const Details = () => {
    const [categoryAll, setCategoryAll] = useState([])
    const { category } = useParams();

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/category/${category}`)
            .then(respone => respone.json())
            .then(json => setCategoryAll([...categoryAll, json]))
    }, [])


    return (
        <div style={{ background: '#f7f7f7', paddingBottom: '50px' }}>
            <div className='container'>
                <div className='row'>
                    <h3 style={{ textAlign: 'center', margin: '50px 0' }}>{category} </h3>
                    <hr />
                    {
                        categoryAll[0]?.map((item, index) => {
                            return (
                                <div className='col-lg-3'>
                                    <Link to={`/detail/${item.id}`}>
                                        <div className="card-wrap" key={index}>
                                            <img src={item.image} className='img-fluid' alt="shirt" />
                                            <div className="card-body">
                                                <h5 className="card-title">${item.price}</h5>
                                                <Button label='GET IT NOW' />
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>)
}

export default Details
