import React from 'react';
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from '@material-ui/core';

import useStyles from './styles';

function CartItem({ item }) {
  const classes = useStyles();
  return (
    <Card>
      <CardMedia image={item.media.image}></CardMedia>
    </Card>
  );
}

export default CartItem;
