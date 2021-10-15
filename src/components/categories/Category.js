import  Button  from '../buttons/Button';
import React, { useEffect } from 'react'
import allActions from '../../redux/action';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const Category = () => {
    const {categoryItem} = useSelector(state => state.categoryReducer)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(allActions.categoryAction.fetchCategory())
        //eslint-disable-next-line
    }, [])

    return (
        <div className='container'>
        <div className='row'>
            {
                categoryItem && categoryItem.map((item,index)=>{
                    return(
                           
                                <div className='col-lg-3'>
                                    <Link to={`/detail/${item.id}`}>
                                    <div className="card-wrap" key={index}>
                                        <img src={item.image} className='img-fluid' alt="shirt"/>
                                        <div className="card-body">
                                            <h5 className="card-title">${item.price}</h5>
                                            <Button label='GET IT NOW'/>
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

export default Category;
