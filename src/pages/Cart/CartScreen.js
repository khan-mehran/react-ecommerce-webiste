import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDisplay } from '../../redux/action/cartAction';
import Button from '../../components/buttons/Button';
const CartScreen = (props) => {
    const dispatch = useDispatch();
    const state = useSelector(state => state.cartReducer);
    console.log(state, 888888888)
    useEffect(() => {
        dispatch(setDisplay())
    }, [])
    return (
        <div style={{ paddingBottom: '50px', paddingTop: '10px' }}>
            <div className='container'>
                <div style={{ display: 'flex', justifyContent: 'flex-end', fontSize: 20, fontFamily: 'cursive', flexDirection: 'row' }}>
                <Button label='Order Now' onClick={() => { }} />
                </div>

                <div className='row'>
                    {
                        state.items.map((item, index) => {
                            return (
                                <>
                                    <div className='col-lg-5 mb-3' >
                                        <div className='card-wrap' key={index}>
                                            <img src={item.image} className='img-fluid' alt="shirt" />
                                        </div>
                                    </div>
                                    <div className='col-lg-7 py-5'>
                                        <div className="card-body">
                                            <p className="card-title">{item.description}</p>
                                            <h6>Price: ${item.price}</h6>
                                            <h6>Quantity: {item.quantity}</h6>

                                            {/* <div style={{  }}> */}
                                                {/* <Button label='Dec' onClick={() => { }} /> */}
                                               
                                                {/* <button style={{backgroundColor: 'white', border}}></button> */}

                                            {/* </div> */}
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default CartScreen;
