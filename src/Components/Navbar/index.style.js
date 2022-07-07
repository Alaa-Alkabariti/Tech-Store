import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 10%;
  position: absolute;
  background-color: #fff;
  opacity: 0.5;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: fixed;
`;

export const UlLeft = styled.ul`
  width: 30%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  list-style: none;
  align-items: center;
`;

export const UlRight = styled.ul`
  width: 30%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  list-style: none;
`;

export const Logo = styled.img`
  width: 10%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const MenuItem = styled.li`
  color: #32353c;
  cursor: pointer;
  &:hover {
    color: #fa7400;
    font-weight: 450;
  }
`;

export const Button = styled.button`
  background-color: white;
  border: 0.2px solid #eeeeee;
  border-radius: 30px;
  box-shadow: 1px 3px 3px #eeeeee .8;
  padding: ${(props) => props.padding};
  color: ${(props) => props.color};
  cursor: pointer;
  font-weight: bold;
  text-align: center;
  border-radius: 9px;
  &:hover {
    background-color: ${props => props.backGroundColor};
  }
  @media (max-width: 768px) {
   margin-top: ${props => props.marginTop};
  }
`;

export const Nav = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9;
`;
