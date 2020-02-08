import { css } from '@emotion/core'

const globals = css`
  body {
    width: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
  }

  a {
    color: inherit;
    text-decoration: none;

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }

  img {
    max-width: 100%;
    position: relative;
    vertical-align: middle;
  }

  table {
    width: 100%;
    font-size: 85%;
    border-collapse: collapse;
  }
`;

export default globals
