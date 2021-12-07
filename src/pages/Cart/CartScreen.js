import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDisplay } from '../../redux/action/cartAction';

const CartScreen = (props) => {
    const dispatch = useDispatch();
    const items = useSelector(state => state.cartReducer);
    useEffect(() => {
        dispatch(setDisplay())
    }, [])
    return (
        <div style={{ paddingBottom: '50px', paddingTop: '10px' }}>
            <div className='container'>
                <div style={{ display: 'flex', justifyContent: 'flex-end', fontSize: 20, fontFamily: 'cursive' }}>
                    Total Price: {items.totalItems}$
                </div>

                <div className={"row"}>
                    <div className={"col-4"}>
                        <img src="" width={'100%'} height={"300px"}/>
                    </div>
                    <div className={"col-8"}>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartScreen;
