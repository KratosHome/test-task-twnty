"use client"
import styled from "styled-components";

export const ContainerFilmItem = styled.div`
  width: 300px;
  border: 1px solid #b7b2b2;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  color: ${props => props.theme.textColor};
  align-items: center;

  & div:first-child {
    display: flex;
    justify-content: space-around;
    text-align: center;
    font-weight: 600;
    font-size: 1.2em;
    margin-bottom: 0.6em;

    & .favourite {
      cursor: pointer;
    }
  }

  & div:not(:nth-child(1)) {
    & span {
      font-weight: 600;
    }
  }

  & .button-container {
    margin-top: 1em;
    display: flex;
    justify-content: center;
    width: 100%;
  }
`;
