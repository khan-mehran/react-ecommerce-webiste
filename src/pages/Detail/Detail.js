import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';
import  Button  from '../../components/buttons/Button';


const Detail = () => {
    const [products, setProducts] = useState([])
    const [categoryAll, setCategoryAll] = useState([])
    const {category} = useParams();
    const {id} = useParams();

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(respone => respone.json())
        .then(json => setProducts([...products,json]))
       
    }, [])

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${category}`)
        .then(respone => respone.json())
        .then(json => setCategoryAll([...categoryAll, json]))
    }, [])
    

    console.log('mehran',categoryAll)
    return (
        <div className='container'>
        <div className='row'>
            {
                products.map((item,index)=>{
                    return(
                           <>
                                <div className='col-lg-5 mb-3' >
                                    <div className='card-wrap' key={index}>
                                        <img src={item.image} className='img-fluid' alt="shirt"/>
                                     </div>
                                </div>
                                <div className='col-lg-7 py-5'>
                                        <div className="card-body">
                                            <p className="card-title">{item.description}</p>
                                            <h6>Price: {item.price}</h6>
                                            <Button/>
                                        </div>
                                </div>
                            </>

                    )
                })
            }
             {
              
              categoryAll.map((item,index)=>{
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

export default Detail
