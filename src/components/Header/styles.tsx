import { styled } from "@mui/material/styles";

export const StyledCart = styled("div")`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;

  .text {
    margin-left: 24px;
  }

  .title {
    font-weight: thin;
    font-size: 0.8em;
  }

  .price {
    font-size: 1.1em;
    font-weight: bold;
  }
`;
