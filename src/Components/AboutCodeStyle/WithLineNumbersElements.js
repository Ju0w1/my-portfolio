import styled from "styled-components";

export const Wrapper = styled.div `
  font-family: monospace;
  text-align: center;
`;

export const Pre = styled.pre `
font-size: 1em !important;
  text-align: left;
  margin: 1em 0;
  padding: 0.5em;
  overflow: hidden;
  background: #1D4044 !important;

  @media (max-width: 991px){
    font-size: 0.75em !important;
  }
  
  & .token-line {
    line-height: 1.3em;
    height: 1.3em;
  }
`;

export const Line = styled.div `
  display: table-row;
`;

export const LineNo = styled.span `
  display: table-cell;
  text-align: right;
  padding-right: 1em;
  user-select: none;
  opacity: 0.5;
`;

export const LineContent = styled.span `
  display: table-cell;
`;