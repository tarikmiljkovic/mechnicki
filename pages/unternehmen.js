/** @jsxImportSource theme-ui */

import Link from "next/link";
// import Image from 'next/image'


import { useEffect, useContext } from "react";
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

  return (
    <Box sx={{ paddingTop: 2 }}>
      <Nav />
      <Container sx={{ px: [4, 4, 4] }}>
        <h1 sx={{ variant: "styles.text.postheading" }}>Das Unternehmen</h1>
        <h2>Mehr über uns.</h2>
        {/* <h1 sx={{ variant: "styles.text.postheading" }}>Das Unternehmen</h1>
        <h2
          sx={{
            variant: "styles.text.leistungenubheading",

            fontWeight: "300",
          }}
        >
          Mehr über uns
        </h2> */}
        <Paragraph sx={{ variant: "styles.text.textbody" }}>
          Wir agieren über die Grenzen Bayerns und Deutschlands hinaus, sind
          auch in Europa vielseitiger Komplettanbieter für Transport, Logistik
          und auch Warenwirtschaft. Durch diese Vielfalt, gepaart mit der
          Erfahrung in unserem mittelständischen Familienunternehmen, bieten wir
          unseren Kunden wahre Mehrwerte wie Flexibilität, Zuverlässigkeit und
          Sicherheit.
        </Paragraph>

        {/* <h2
          sx={{
            variant: "styles.text.leistungenubheading",

            fontWeight: "300",
          }}
        >
          Historie
        </h2>
        <Paragraph sx={{ variant: "styles.text.textbody" }}>
          Das Firma wurde im Jahr 2015 gegrundet.
        </Paragraph> */}
        <Service />
        {/* leistungen={leistungen} */}
        <br />
        <Footer />
      </Container>
    </Box>
  );
}
