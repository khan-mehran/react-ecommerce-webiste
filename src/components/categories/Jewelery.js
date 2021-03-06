import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import allActions from '../../redux/action';
import Button from '../buttons/Button';

const Jewelery = () => {
    const dispatch = useDispatch()
    const { jeweleryItem } = useSelector(state => state.jeweleryReducer)
    useEffect(() => {
        dispatch(allActions.jeweleryAction.fetchJewelery())
    }, [])

    return (
        <div className='container'>
            <div className='row'>
                {
                    jeweleryItem && jeweleryItem.map((item, index) => {
                        return (
                            <div className='col-12 col-md-6 col-lg-3  d-flex justify-content-center'>
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
    )
}

export default Jewelery
