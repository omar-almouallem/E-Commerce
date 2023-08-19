import React from 'react'
import {Typography,Card,Button,CardActions,CardContent,CardMedia} from "@material-ui/core"
import useStyles from "./styles"
const CartItem = ({item,handleUpdateCartQty,
  handleRemoveFromCart}) => {
    const classes = useStyles()
    const  onUpdateCartQty = (lineItemId, newQuantity) => handleUpdateCartQty(lineItemId, newQuantity);

    const  onRemoveFromCart= (lineItemId) => handleRemoveFromCart(lineItemId);
  return (
    <>
    <Card>
        <CardMedia image={item.image.url} alt={item.name} className={classes.media} />
        <CardContent className={classes.CardContent}>
        <Typography variant='h4' >
      {item.name}
        </Typography>
        <Typography variant='h4' >
      {item.line_total.formatted_with_symbol}
        </Typography>
        </CardContent>
        <CardActions className={classes.CardActions} >
          <div className={classes.buttons} >
            <Button size='small' type='button' onClick={() => onUpdateCartQty(item.id, item.quantity - 1)}>-</Button>
            <Typography>&nbsp;{item.quantity}&nbsp;</Typography>
            <Button size='small' type='button' onClick={() => onUpdateCartQty(item.id, item.quantity + 1)}>+</Button>
          </div>
<Button variant='contained' type='button' color="secondary" onClick={() => onRemoveFromCart(item.id)}>Remove</Button>
        </CardActions>
    </Card>
    </>
  )
}

export default CartItem