/** @jsxImportSource theme-ui */


import Head from "next/head";
import Link from "next/link";
// import Image from 'next/image'

import {
  Flex,
  Card,
  Button,
  Grid,
  Divider,
  Text,

  Container,
  Image,
  AspectImage,
  Paragraph,
  Box,
  Alert,
  Close,
  Heading,
  NavLink,
} from "theme-ui";

import Nav from "./Nav";

// backgroundImage: "url(" + `${require("./path-to-the-image")}` + ")",

export default function HeroPage() {
  return (
    <Box
      sx={{
        height: "100vh",
        mb: 0,
        position: "relative",
        verticalAlign: "middle",
        backgroundImage: `url(${"/imgs/10.jpg"})`,
        backgroundSize: "cover",
        objectPosition: "top center",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minWidth: "100%",
        width: "100%",

        // backgroundAttachment: "fixed",
      }}
    >
      <Box
        zIndices={0}
        sx={{
          // height: "100vh",
          position: "absolute",
          height: "100%",
          width: "100%",
          minWidth: "100%",
          verticalAlign: "middle",
          backgroundColor: "rgba(9, 17, 49, 0.30)",
          // background:
          //   "linear-gradient(to top, rgba(0, 0, 0, 0.75), transparent)",
          objectFit: "cover",
          objectPosition: "top center",
        }}
      ></Box>

      <Box sx={{ position: "relative", paddingTop: 2 }} zIndices={50}>
        <Nav />
        <Container sx={{ px: [4, 4, 4], paddingTop: 5 }}>
          <Heading as="h1" variant="heading" sx={{ backgroundColor: "blue" }}>
            {/* LOGISTIKUNTERNEHMEN MECHNICKI: */}
            Aus Herausforderungen werden Chancen
            {/* ZUVERLÄSSIGE CONTAINERLOGISTIK */}
            {/* AUS EINER HAND */}
          </Heading>

          <Heading
            as="h2"
            variant="subheading"
            // sx={{
            //   variant: "styles.text.leistungenubheading",
            // }}
          >
            Europaweite Truck-Containertransporte temperaturgeführte Transporte
            und GDP-Zertifizierung Gefahrgut- und genehmigungspflichtige
            Abfalltransporte
          </Heading>

          <Link href="/wir/warum-wir">
            <a sx={{ variant: "links.secondary" }} variant="links.secondary">
              Weiter Informationen
            </a>
          </Link>
        </Container>
      </Box>
    </Box>
  );
}


