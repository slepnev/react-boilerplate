import styled from '@emotion/styled';
import { css } from '@emotion/core';

const appStyle = css`
  background: gray;
`;

const header = css`
  .app__header {
    display: flex;
    padding: 0;
    margin: 0;
  }
`;

const container = css`
  .app__container {
    display: flex;
    padding: 0;
    margin: 0;
  }
`;

const AppStyled = styled.div`
  ${appStyle};
  ${header};
  ${container};
`;

export default AppStyled;
