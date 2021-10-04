import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import allActions from '../../redux/action'
import  Button  from '../buttons/Button';
import './style.css'

const Card = () => {
    const storeData = useSelector(state => state)
    const {userItem} = useSelector(state => state.userReducer)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(allActions.userAction.fetchUser())
    }, [])

    return (
        <div className='container'>
        <div className='row'>
        {/* <Link to={`/detail/${userItem.length > 0 ?userItem[0].category :''}`}><h2>Men new</h2></Link> */}
        
            {
              
                userItem?.map((item,index)=>{
                    
                    return(
                        
                                <div className='col-lg-3'>
                                    <Link to={`/detail/${item.id}`}>
                                    <div className="card-wrap" key={index}>
                                        <img src={item.image} className='img-fluid' alt="shirt"/>
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
