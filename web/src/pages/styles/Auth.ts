import styled from "styled-components";

export const Container = styled.div``;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 200px;
  height: 200px;
  margin: 50px auto;
`;

export const ButtonSubmit = styled.button`
  color: ${({ theme }) => theme.main.text2};
  margin-top: 10px;
  padding: 5px;
  width: 70%;
  background-color: ${({ theme }) => theme.main.button};
  transition: ease-in-out 0.1s;
  &:hover {
    opacity: 0.9;
  }
  &:active {
    opacity: 0.3;
  }
`;

export const Input = styled.input`
  margin-top: 10px;
  padding: 10px;
  width: 80%;
  background-color: ${({ theme }) => theme.main.bgConstrast};
  border: ${({ theme }) => theme.main.border};
  border-radius: 10px;
`;
