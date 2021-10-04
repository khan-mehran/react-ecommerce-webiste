import React from "react";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import {useDispatch} from 'react-redux'
import allActions from '../../redux/action'
import { useSelector } from "react-redux";
  
export default function Cart() {
  const cartReducer = useSelector(state => state.cartReducer)
  const [itemCount, setItemCount] = React.useState(0);
  const dispatch = useDispatch()
  
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