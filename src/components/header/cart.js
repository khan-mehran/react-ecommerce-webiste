import React from "react";
import Badge from "@material-ui/core/Badge";
import { useSelector } from "react-redux";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

export default function Cart() {
  const totalItems = useSelector(state => state.cartReducer.totalItems)

  return (
    <div style={{ display: "block", padding: 20, color: 'white' }}>
      <div>
        <Badge color="secondary" badgeContent={totalItems}>
          <ShoppingCartIcon />
        </Badge>
      </div>
    </div>
  );
}
