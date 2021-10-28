/** @jsxImportSource theme-ui */

import Head from "next/head";
import Link from "next/link";
// import Image from 'next/image'
import {useEffect} from 'react';
import { useContext } from "react";
import { MainContext } from "../contexts/MainContext";

import {
  Flex,
  Card,
  Button,
  Grid,
  Divider,
  Text,
  // Link,
  Container,
  Image,
  AspectImage,
  Paragraph,
  Box,
  Heading,
  Alert,
  Close,
  NavLink,
} from "theme-ui";

import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Feature from "../components/Feature";
import Service from "../components/Service";

export default function Kontakt() {

  let { primaryNav, setPrimaryNav } = useContext(MainContext);

  useEffect(() => {
    setPrimaryNav(false);
  });

  console.log(primaryNav);

  // useEffect(() => {
  //   setItems(mycontext.users);
  // }, [mycontext.users]);

  primaryNav = false;
  return (
    <Box>
      <Nav />
      <Container sx={{ px: [4, 4, 4] }}>
        <h1 sx={{ variant: "styles.text.postheading" }}>Kontakt</h1>
        <h2>
          Hier haben Sie möglichkeit uns zu erreichen.
        </h2>
        <Text sx={{ variant: "styles.text.textbody" }}>
          Glockenstraße <br />
          32107 Bad Salzuflen <br />
          Deutschland <br />
          <br />
          <div>
            tel:{" "}
            <Link href="tel:+4915222832744">
              <a href="tel:+4915222832744" sx={{ variant: "styles.navlink" }}>
                +49 152 22832744
              </a>
            </Link>
          </div>
          {/* <div> */}
          {/*   fax:{" "} */}
          {/*   <Link href="tel:+4915203468634"> */}
          {/*     <a href="tel:+4915203468634" sx={{ variant: "styles.navlink" }}> */}
          {/*       +4915203468634 */}
          {/*     </a> */}
          {/*   </Link> */}
          {/* </div> */}
          <div>
            mail:{" "}
            <Link href="mailto:office@mechanicki.de">
              <a
                href="mailto:office@mechanicki.de"
                sx={{ variant: "styles.navlink" }}
              >
                office@mechanicki.de
              </a>
            </Link>
          </div>
        </Text>
        <Service />
        {/* leistungen={leistungen} */}
        <br />
        <Footer />
      </Container>
    </Box>
  );
}
