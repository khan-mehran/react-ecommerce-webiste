import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import allActions from '../../redux/action'
import  Button  from '../buttons/Button';

const Womens = () => {
    const dispatch =useDispatch()
    const {womenItem} = useSelector(state => state.womenReducer)
    useEffect(() => {
        dispatch(allActions.womenAction.fetchWomen())
    }, [])

    return (
        <div className='container'>
        <div className='row'>
            {
                womenItem && womenItem.map((item,index)=>{
                    return(
                           //const send = {...item,qutity} => redux
                                 <div className='col-lg-3'>
                                    <Link to={`/detail/${item.id}`}>
                                    <div className="card-wrap" key={index}>
                                        <img src={item.image} className='img-fluid' alt="shirt"/>
                                        <div className="card-body">
                                            <h5 className="card-title">{item.price}</h5>
                                            <Button/>
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

export default Womens
