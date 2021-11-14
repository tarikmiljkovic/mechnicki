

/** @jsxImportSource theme-ui */

import Link from 'next/link'
// import Image from 'next/image'
import React from "react";
import { useContext } from "react";
import { MainContext } from "../contexts/MainContext";

import {
  Container,
  Link as ThemeLink,
  Box,
  Image,
  Flex,
} from "theme-ui";


var menu = [
  {
    item: "Über uns",
    link: "/ueber-uns",
  },
  {
    item: "Datenschutz",
    link: "/datenschutz",
  },
  {
    item: "Kontakt",
    link: "/kontakt",
  },
];

export default function Nav() {

  let { primaryNav, setPrimaryNav } = useContext(MainContext);
  console.log(primaryNav);

  return (
    <MainContext.Consumer>
      {(props) => (
        <Container sx={{ p: [4, 4, 4] }}>
          <header
            sx={{
              background: "transparent",
              display: "flex",
              alignItems: "stretch",
              alignContent: "stretch",
              justifyContent: "flex-end",
              flexWrap: ["wrap", "wrap", "wrap"],
            }}
          >
            <Flex sx={{ mr: "auto" }}>
              <Box>
                <Link href="/">
                  <a
                    onClick={() => {
                      props.setPrimaryNav(true);
                    }}
                  >
                    <Image
                      src={`${primaryNav == true ? `/logos/logo-secondary.svg` : `/logos/logo.svg`}`}
                      variant="avatar"
                      sx={{ height: ["60px", "60px", "60px"] }}
                    />
                  </a>
                </Link>
              </Box>
            </Flex>

            <Flex
              sx={{
                width: ["100%", "auto", "auto"],
                height: ["auto", "auto"],
                wordBreak: "keep-all",
                whiteSpace: "nowrap",
                overflowX: "auto",
                overflowY: "hidden",
              }}
            >

              {menu.map((item) => (
                <Link href={item.link} sx={{}}>
                  <ThemeLink
                    onClick={() => {
                      props.setPrimaryNav(false);
                    }}
                    sx={{
                      variant: "styles.headnavlink",
                      color: `${
                        props.primaryNav == true ? "white" : "#0B2867"
                      }`,
                      flex: "1 0 auto",
                      display: "inline-block",
                    }}
                  >
                    {item.item}
                  </ThemeLink>
                </Link>
              ))}
            </Flex>
          </header>
        </Container>
      )}
    </MainContext.Consumer>
  );}