import Image from "next/image";
import { FcMenu, FcMinus } from "react-icons/fc";
import Link from "next/link";
import React, { useState, useContext } from "react";
import {
  AuthButton,
  LogoContainer,
  Menu,
  MenuItem,
  MenuWrapper,
  MobileIcon,
  Nav,
  NavBarContainer,
} from "./NavBar.elements";
import { AuthContext } from "../../contexts/Auth/AuthContext";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { showLogin, setShowLogin } = useContext(AuthContext);

  const handleClick = () => {
    if (window.innerWidth < 960) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <Nav>
      <NavBarContainer>
        <LogoContainer>
          <Link href={"/"}>
            <a>
              <Image
                src="/img/LogoAmigosSinSecretos3.png"
                width={180}
                height={70}
                alt="Logo Amigos Sin Secretos"
              ></Image>
            </a>
          </Link>
        </LogoContainer>
        <MobileIcon onClick={handleClick}>
          {isOpen ? <FcMinus /> : <FcMenu />}
        </MobileIcon>
        <MenuWrapper>
          <Menu onClick={handleClick} isOpen={isOpen}>
            <MenuItem>
              <Link href={"/"}>Inicio</Link>
            </MenuItem>
            <MenuItem>
              <Link href={"/consejero"}>Amigo Consejero</Link>
            </MenuItem>
            <MenuItem>
              <Link href={"/prestamista"}>Amigo Prestamista</Link>
            </MenuItem>
            <MenuItem>
              <Link href={"/reclamista"}>Amigo Reclamista</Link>
            </MenuItem>
            <AuthButton
              onClick={() => {
                setShowLogin(!showLogin);
              }}
            >
              Iniciar Sesión
            </AuthButton>
          </Menu>
        </MenuWrapper>
      </NavBarContainer>
    </Nav>
  );
};

export default NavBar;
