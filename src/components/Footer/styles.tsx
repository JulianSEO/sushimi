import styled from "@emotion/styled";

import FooterImage from "assets/images/bg-footer.png";

export const StyledFooter = styled.footer`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center bottom;
  background-image: url(${FooterImage});
  padding: 8.75rem 0 8.25rem 0;

  .copyright {
    color: #7a7879;
    text-align: center;
  }
`;
