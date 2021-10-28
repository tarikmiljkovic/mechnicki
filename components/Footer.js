
/** @jsxImportSource theme-ui */

import Head from "next/head";
import Link from "next/link";


import {
  Link as ThemeLink,
  NavLink,
  Box,
} from "theme-ui";

import { useContext, setState } from "react";
import { MainContext } from "../contexts/MainContext";

export default function Footer() {

  let { primaryNav, setPrimaryNav } = useContext(MainContext);

  return (
    <Box>
      <footer
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          py: 2,
          variant: "styles.footer",
        }}
      >
        <Link href="/unternehmen">
          <ThemeLink to="/" sx={{ variant: "styles.navlink", p: 2 }} onClick={() => {
                      setPrimaryNav(false);
                    }}>
            Das Unternehmen
          </ThemeLink>
        </Link>

        <Link href="/kontakt">
          <ThemeLink to="/" sx={{ variant: "styles.navlink", p: 2 }} onClick={() => {
                      setPrimaryNav(false);
                    }}>
            Kontakt
          </ThemeLink>
        </Link>

        <div sx={{ mx: "auto" }} />
        {/* <div sx={{ p: 2 }}></div> */}
      </footer>
    </Box>
  );
}