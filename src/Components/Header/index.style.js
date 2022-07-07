import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const TextSection = styled.div`
  width: 80%;
  height: auto;
  margin-top: 30px;
  left: 10%;
  top: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position: absolute;
  @media (max-width: 768px) {
    width: 90%;
    left: 5%;
    text-align: center;
    align-items: center;
  }
`;

export const Title = styled.h1`
  color: white;
  font-size: 54px;
  font-weight: bold;
`;

export const Summary = styled.p`
  color: white;
  font-weight: 400;
  font-size: 20px;
  @media (max-width: 768px) {
    max-width: 400px;
  }
`;
