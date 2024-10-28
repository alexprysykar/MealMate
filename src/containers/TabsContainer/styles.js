import styled from "styled-components";

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

export const TabsContainerWrapper = styled.div`
  padding: 20px;
`;

export const StyledHeader = styled.div`
  text-align: center;
  margin-bottom: 20px;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 10px;
`;

export const StyledSearchSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

export const StyledSelectWrapper = styled.div`
  padding: 8px;
  margin-right: 8px;
  border-radius: 4px;
`;
