import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import allActions from '../../redux/action'
import Button from '../buttons/Button';
import './style.css'

const Card = () => {
    const { userItem } = useSelector(state => state.userReducer)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(allActions.userAction.fetchUser())
        //eslint-disable-next-line
    }, [])

    return (
        <div className='container'>
            <div className='row'>

                {

                    userItem?.map((item, index) => {

                        return (

                            <div className='col-12 col-md-6 col-lg-3 d-flex justify-content-center'>
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

export default Card
