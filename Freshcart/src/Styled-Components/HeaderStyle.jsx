import styled from "styled-components";

export const HeaderStyle = styled.header`
  position: sticky;
  z-index: 10;
  left: 0;
  top: 0;
  right: 0;
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  /* position: relative; */
  border-bottom: 1px solid rgb(219, 217, 217);
  .logo {
    height: 5rem;
  }
`;
