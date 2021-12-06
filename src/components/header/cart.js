import React from "react";
import Badge from "@material-ui/core/Badge";
import { useSelector } from "react-redux";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

export default function Cart() {
  const cartReducer = useSelector(state => state.cartReducer)

  return (
    <div style={{ display: "block", padding: 20, color: 'white' }}>
      <div>
        <Badge color="secondary" badgeContent={cartReducer}>
          <ShoppingCartIcon />
        </Badge>
      </div>
    </div>
  );
}
