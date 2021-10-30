import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            marginBottom: 20,
          }}
        >
          <span style={{ fontSize: "2rem" }}>Barış Can Çifçi</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects" as="projeler">
          <NavLink>Projeler</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech" as="yetkinlikler">
          <NavLink>Yetkinlikler</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#projects" as="hakkımda">
          <NavLink>Hakkımda</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/Bariscncfc">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/bar%C4%B1%C5%9F-can-%C3%A7if%C3%A7i/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
