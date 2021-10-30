import styled from "@emotion/styled";

import BgImage from "assets/images/bg-subheader.jpg";

export const StyledHeroContainer = styled.div`
  background-image: url(${BgImage});
  color: #c7c8cc;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  text-align: center;
  min-height: 34rem;
  padding: 7.5rem 0 5rem;
  position: relative;
  z-index: 1;

  :after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(4, 10, 28, 0.6);
    z-index: -1;
  }
`;
