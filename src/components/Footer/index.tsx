import React from "react";

import { StyledFooter } from "./styles";

const Footer = () => {
  return (
    <React.Fragment>
      <StyledFooter>
        <p className="copyright">
          Copyright © 2021 Sushimi. Designed &#38; built by&nbsp;
          <a href="https://kalkutin.dev" target="_blank">
            Evgenii Kalkutin
          </a>
        </p>
      </StyledFooter>
    </React.Fragment>
  );
};

export default Footer;
