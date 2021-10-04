import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';
// import Button from "@material-ui/core/Button";
import {useDispatch} from 'react-redux'
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import allActions from '../../redux/action'
import Button  from '../../components/buttons/Button';
import products_banner from '../../images/products_banner.jpg'


const Detail = () => {
    const [products, setProducts] = useState([])
    const [itemCount, setItemCount] = React.useState(1);
    const dispatch = useDispatch()
    const {id} = useParams();

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(respone => respone.json())
        .then(json => setProducts([...products,json]))
       
    }, [])

    return (
        <div style={{paddingBottom:'50px'}}>
        {/* <img src={products_banner} style={{width:'100%',height:'365px'}}/> */}
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
                                            <h6>Price: ${item.price}</h6>
                                            <Button label='ADD TO CART'/>
                                            {/* <ButtonGroup>
                                                <Button
                                                    onClick={()=>dispatch(allActions.cartAction.decrement())}
                                                >
                                                    {" "}
                                                    <RemoveIcon fontSize="small" />
                                                </Button>
                                                <Button
                                                
                                                    onClick={()=>dispatch(allActions.cartAction.increment())}
                                                >
                                                    {" "}
                                                    <AddIcon fontSize="small" />
                                                </Button>
                                            </ButtonGroup> */}
                                        </div>
                                </div>
                            </>

                    )
                })
            }
             {/* {
              
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
          } */}
       </div>
        </div>
        </div>
    )
}

export default Detail
