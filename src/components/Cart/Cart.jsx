import React from "react";
import { Container, Typography, Grid, Button } from "@material-ui/core";
import CartItem from "./CartItem/CartItem";
import useStyles from "./styles.js";
import { Link } from "react-router-dom/cjs/react-router-dom";
// !cart.line_items.length;
const Cart = ({
  cart,
  handleUpdateCartQty,
  handleRemoveFromCart,
  handleEmptyCart
}) => {
  //  const isEmpty = cart.line_items.length
  const classes = useStyles();
  const onEmptyCart = () => handleEmptyCart();

    const renderEmptyCart = () => (
      <Typography variant="subtitle1">You have no items in your shopping cart,
        <Link className={classes.link} to="/">start adding some</Link>!
      </Typography>
    );
  
    // if (!cart) return 'Loading';

    const renderCart = () => (
      <>
      <Grid container spacing={3}>
        {cart.line_items.map((lineItem) => (
          <Grid item xs={12} sm={4} key={lineItem.id}>
            <CartItem item={lineItem} handleUpdateCartQty={handleUpdateCartQty} handleRemoveFromCart={handleRemoveFromCart} />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h4">Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
        <div>
          <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={onEmptyCart}>Empty cart</Button>
          <Button className={classes.checkoutButton} component={Link} to="/checkout" size="large" type="button" variant="contained" color="primary">Checkout</Button>
                {cart.subtotal.formatted_with_symbol ==="$0.00" ? <Button className={classes.startAdding} component={Link} to="/" size="large" type="button" variant="contained" color="secondary" >Start Adding</Button>:""}


        </div>
      </div>
    </>
    );
  
  //  if (!cart.line_items) return "loading";
  const isEmpty = cart ? cart.line_items :""?cart.line_items:"" ? cart.line_items.length: "Loading..."

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3" gutterBottom>
        Your Shopping Cart
      </Typography>
      {!isEmpty ? renderEmptyCart() : renderCart() }
    </Container>
  );
};

export default Cart;
