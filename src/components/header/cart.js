import React from "react";
// import {useDispatch} from 'react-redux'
import Badge from "@material-ui/core/Badge";
import { useSelector } from "react-redux";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
// import ButtonGroup from "@material-ui/core/ButtonGroup";
// import Button from "@material-ui/core/Button";
// import AddIcon from "@material-ui/icons/Add";
// import RemoveIcon from "@material-ui/icons/Remove";
// import allActions from '../../redux/action'

  
export default function Cart() {
  const cartReducer = useSelector(state => state.cartReducer)
  // const [itemCount, setItemCount] = React.useState(0);
  // const dispatch = useDispatch()
  
  return (
    <div style={{  display: "block", padding: 20 , color:'white' }}>
      <div>
        <Badge color="secondary" badgeContent={cartReducer}>
          <ShoppingCartIcon />{" "}
        </Badge>
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
  );
}