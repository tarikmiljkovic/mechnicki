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
  Heading,
  // Link,
  Container,
  Image,
  AspectImage,
  Paragraph,
  Box,
  Alert,
  Close,
  NavLink,
} from "theme-ui";

export default function Feature() {
  return (
    <Grid
      gap={4}
      py={[4,16,32]}
      px={[0, 0]}
      columns={([2, "1fr 1fr"], [1, "1fr 1fr"])}
    >
      <Box bg="primary">
        <AspectImage
          ratio={4 / 3}
          src="static/meeting.jpg"
          sx={{
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            maxWidth: "100%",
            height: "100%",
          }}
          // objectFit: "scale-down", maxWidth: "120%"
        />
      </Box>
      <Box py={3} sx={{ height: "auto", alignSelf: "center" }}>
        <Heading as="h2">Wir liefern Chancen.</Heading>
        <Paragraph variant="block">
          Bemerkenswerte Leistungen, die über den Versand und die
          Sendungsverfolgung hinaus gehen und Ihr Unternehmen beim Wachstum
          unterstützen.
        </Paragraph>
        <Button mr={2} variant="secondary">
          Beep
        </Button>
      </Box>


    </Grid>
  );
}
