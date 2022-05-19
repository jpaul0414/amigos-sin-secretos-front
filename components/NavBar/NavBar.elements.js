import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  height: 80px;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 999;
  border-bottom: 1px solid #adacac;
`;

export const NavBarContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 960px) {
    justify-content: space-around;
  }
`;

export const LogoContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 250px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 960px) {
    order: 1;
    justify-content: flex-end;
  }
`;

export const MobileIcon = styled.div`
  width: 32px;
  height: 32px;
  display: none;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  cursor: pointer;

  @media screen and (max-width: 960px) {
    display: flex;
    margin: 0 2rem;
  }
`;

export const MenuWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 960px) {
    order: 2;
    max-width: 50px;
    justify-content: flex-end;
  }
`;

export const Menu = styled.ul`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 1rem;

  @media screen and (max-width: 960px) {
    flex-direction: column;
    position: absolute;
    top: 80px;
    left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
    height: calc(100vh - 80px);
    transition: all 0.3s ease;
    background-color: #ffff;
    opacity: 1;
    justify-content: flex-start;
  }
`;

export const MenuItem = styled.li`
  border-bottom: 2px solid transparent;
  padding: 0.5rem 1.5rem;

  &:hover {
    border-bottom: 2px solid #0070b8;
  }
`;

export const AuthButton = styled.button`
  width: 100%;
  max-width: 160px;
  height: 50px;
  background-color: #0070b8;
  color: #ffff;
  font-size: 1rem;
  border: 2px solid transparent;
  outline: none;
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    background-color: #ffff;
    border: 2px solid #0070b8;
    color: #0070b8;
    transition: all 0.5s ease;
  }
`;
