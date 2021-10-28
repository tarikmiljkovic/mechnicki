/** @jsxImportSource theme-ui */

import Link from "next/link";

import {
  Flex,
  Container,
  Box,
  Alert,
} from "theme-ui";

import { MdPhone, MdMailOutline } from "react-icons/md";

export default function MyAlert() {

  return (
    <>
      <Alert>
        <Container sx={{ px: [0, 4, 4] }}>
          <Flex
            sx={{
              justifyContent: "space-between",
              flexWrap: "wrap",
              flexItems: "center",
            }}
          >
            <Flex sx={{ flex: "0 1 auto" }}>
              <MdPhone sx={{ height: "100%" }} />
              <Link href="tel:+4915222832744">
                <a
                  href="tel:+4915222832744"
                  sx={{ variant: "styles.alertnavlink" }}
                >
                 +4915222832744
                </a>
              </Link>
            </Flex>
            <Flex>
              <MdMailOutline sx={{ height: "100%" }} />
              <Link href="mailto:office@mechanicki.de">
                <a
                  href="mailto:office@mechanicki.de"
                  sx={{ variant: "styles.alertnavlink" }}
                >
                  office@mechanicki.de
                </a>
              </Link>
            </Flex>
          </Flex>
        </Container>
      </Alert>
    </>
  );
}
