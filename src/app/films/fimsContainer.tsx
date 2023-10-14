"use client"
import styled from "styled-components";

export const FilmsContainer = styled.div`
  padding: 20px;
  margin: auto;
  max-width: 1200px;

  & .favourite{
    text-align: center;
    font-weight: bold;
  }
  & .sort-container {
    margin-top: 1em;
    display: flex;
    justify-content: center;
    margin-bottom: 1.2em;

    & input {
      margin-right: 10px;
    }
  }
`;

export const FilmsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;
