import React from "react";
import { Box } from "@mui/system";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";

const ProductCard = (props: any) => {
  return (
    <React.Fragment>
      <Card>
        <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
          <CardMedia
            component="img"
            sx={{ maxHeight: 170 }}
            src={props.item.url}
          ></CardMedia>
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h6" component="div">
              {props.item.title}
            </Typography>
            <Typography gutterBottom variant="body2" component="div">
              {props.item.description}
            </Typography>
          </CardContent>
          <Divider />
          <CardActions>
            <span style={{ fontWeight: "bold" }}>{props.item.price}</span>
            <span>mdl</span>
            <Box sx={{ flexGrow: 1 }} />
            <Button variant="outlined" size="small" color="secondary">
              В корзину
            </Button>
          </CardActions>
        </Box>
      </Card>
    </React.Fragment>
  );
};

export default ProductCard;
