import React from "react";
import { Box } from "@mui/system";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";

const ProductCard = (props: any) => {
  return (
    <React.Fragment>
      <Card>
        <CardHeader title={props.item.title} />
        <Divider />
        <CardMedia
          sx={{ padding: "0 48px" }}
          component="img"
          src={props.item.url}
          height="120"
        />
        <CardContent
          sx={{ flexGrow: 1, flexDirection: "column", minHeight: "90px" }}
        >
          <Typography gutterBottom variant="body1" component="div">
            {props.item.description}
          </Typography>
        </CardContent>
        <Divider />
        <CardActions>
          {props.item.price} MDL
          <Box sx={{ flexGrow: 1 }} />
          <Button size="small" color="secondary">
            В корзину
          </Button>
        </CardActions>
      </Card>
    </React.Fragment>
  );
};

export default ProductCard;
