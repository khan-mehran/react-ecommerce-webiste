import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';
import  Button  from '../../components/buttons/Button';


const Details = () => {
    const [products, setProducts] = useState([])
    const [categoryAll, setCategoryAll] = useState([])
    const {category} = useParams();

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/category/${category}`)
        .then(respone => respone.json())
        .then(json => setCategoryAll([...categoryAll, json]))
    }, [])
    

    // console.log('mehran',category)
    console.log('akif',categoryAll);
    return (
        <div className='container'>
        <div className='row'>
             {
              
              categoryAll[0]?.map((item,index)=>{
                  return(
                         
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

export default Details
