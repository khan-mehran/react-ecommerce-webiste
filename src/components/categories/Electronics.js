import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import allActions from '../../redux/action'
import Button from '../buttons/Button';


const Electronics = () => {
    const { electricItem } = useSelector(state => state.electronicReducer)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(allActions.electronicAtion.fetchElectronic())
    }, [])
    return (
        <div className='container'>
            <div className='row'>
                {
                    electricItem && electricItem.map((item, index) => {
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
                                </Link >
                            </div>

                        )
                    })
                }
            </div>
        </div>
    )
}

export default Electronics

