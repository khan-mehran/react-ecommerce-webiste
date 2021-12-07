import React from "react";
import Badge from "@material-ui/core/Badge";
import { useSelector } from "react-redux";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";

export default function Cart() {
  const displayItems = useSelector(state => state.cartReducer.displayItems)

  return (
    <div style={{ display: "block", padding: 20, color: 'white' }}>
      <div>
        <Link to="/cart" style={{ color: 'white' }}>
          <Badge color="secondary" badgeContent={displayItems}>
            <ShoppingCartIcon color="#fff"/>
          </Badge>
        </Link>
      </div>
    </div>
  );
}
