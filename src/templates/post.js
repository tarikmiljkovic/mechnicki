/** @jsxImportSource theme-ui */

import Head from "next/head";
import Link from "next/link";

import Logo from "../../components/Logo";
import Nav from "../../components/Nav";

import { useContext, useEffect } from "react";
import { MainContext } from "../../contexts/MainContext";

import { Container } from "theme-ui";

export default function Post({ children, frontMatter }) {
  let { primaryNav, setPrimaryNav } = useContext(MainContext);

  useEffect(() => {
    setPrimaryNav(false);
  });



  return (
    <main sx={{ paddingTop: 2 }}>
      <Nav />
      <Container px={4}>

        <div>{children}</div>


        <Link href="/">
          <a sx={{ variant: "links.primary" }}>Zurück zur Startseite</a>
        </Link>
      </Container>
    </main>
  );
}
