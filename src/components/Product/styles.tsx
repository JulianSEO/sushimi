import styled from "@emotion/styled";

export const StyledProduct = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 1.5rem;
  border: 2px solid #f1f1f1;
  transition: all 0.5s ease;
  cursor: pointer;

  :hover {
    border-color: #282f40;
  }
`;

export const StyledDescription = styled.div`
  min-height: 170px;
  margin-bottom: 1rem;
  padding-top: 1.5rem;

  .title {
    color: #040a1c;
    font-size: 24px;
  }

  .product-info {
    margin-bottom: 1rem;
    font-size: 0.875rem;
    line-height: 1rem;
    .info-tag {
      color: #a8a7a8;
      :not(:last-child) {
        border-right: 1px solid #a8a7a8;
        padding-right: 5px;
        margin-right: 5px;
      }
    }
  }

  .description {
    color: #7a7879;
    font-size: 16px;
    margin: 0;
  }
`;

export const StyledPrice = styled.div`
  display: flex;
  justify-content: space-between;

  .price {
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 300;
    color: #040a1c;
  }

  .basket {
    border: 1px solid #ca3c3f;
  }
`;
