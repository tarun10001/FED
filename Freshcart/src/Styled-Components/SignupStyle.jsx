import styled from "styled-components";


export const SignupStyled = styled.section`
width: 40%;
margin: 40px auto;

.container {
  margin-top: 2rem;
  .contact-form {
    max-width: 30rem;
    margin: auto;
    .contact-inputs {
      display: flex;
      flex-direction: column;
      gap: 3rem;
      span {
        font-size: 35px;
      }
      input {
        padding: 12px;
      }
      input[type="submit"] {
        cursor: pointer;
        transition: all 0.2s;
        width: 12rem;
        height: 3rem;
        color: #fff;
        background-color: steelblue;
        border: none;
        &:hover {
          transform: scale(0.9);
        }
      }
    }
  }
}
`;