import styled from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const StyledInput = styled.input`
  padding: 8px;
  font-size: 16px;
  margin-right: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

export const StyledButton = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  background-color: #1890ff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #40a9ff;
  }
`;

export const StyledForm = styled.form`
  margin-bottom: 16px;
  display: flex;
  align-items: center;
`;
