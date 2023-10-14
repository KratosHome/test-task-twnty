"use client"
import styled from "styled-components";

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 1.2rem;
  cursor: pointer;
  background-color: ${props => props.theme.buttonBack};
  color: ${props => props.theme.buttonTextColor};
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${props => props.theme.buttonHover};
  }
`;