import React, { useState } from "react";
import Navbar from "@material-tailwind/react/Navbar";
import NavbarContainer from "@material-tailwind/react/NavbarContainer";
import NavbarWrapper from "@material-tailwind/react/NavbarWrapper";
import NavbarBrand from "@material-tailwind/react/NavbarBrand";
import NavbarToggler from "@material-tailwind/react/NavbarToggler";
import NavbarCollapse from "@material-tailwind/react/NavbarCollapse";
import Nav from "@material-tailwind/react/Nav";
import NavItem from "@material-tailwind/react/NavItem";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

export default function Header() {
  const [openNavbar, setOpenNavbar] = useState(false);
  const user = useSelector((state) => state.authReducer.auth);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch({ type: "AUTH_USER", payload: "" });
    dispatch({ type: "AUTH_USER_MESSAGE", payload: "" });
    dispatch({ type: "AUTH_USER_PATH", payload: "" });
    router.push("/");
  };

  return (
    <Navbar color="indigo" navbar className="fixed w-full z-10 top-0">
      <NavbarContainer>
        <NavbarWrapper>
          <NavbarBrand>
            <Link href="/">
              <a>Tiedup Blogs</a>
            </Link>
          </NavbarBrand>
          <NavbarToggler
            color="white"
            onClick={() => setOpenNavbar(!openNavbar)}
            ripple="light"
          />
        </NavbarWrapper>

        <NavbarCollapse open={openNavbar}>
          <Nav>
            <NavItem>
              <Link href="/">
                <a>Home</a>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/about">
                <a>About</a>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/blogs">
                <a>Blogs</a>
              </Link>
            </NavItem>
            <NavItem>
              {user ? (
                <a className="cursor-pointer" onClick={handleLogout}>
                  Logout
                </a>
              ) : (
                <Link href="/login">
                  <a>Login</a>
                </Link>
              )}
            </NavItem>
          </Nav>
        </NavbarCollapse>
      </NavbarContainer>
    </Navbar>
  );
}
