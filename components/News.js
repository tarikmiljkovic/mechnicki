/** @jsxImportSource theme-ui */

import Head from "next/head";
import Link from "next/link";

import React from "react";
import { useContext } from "react";
import { MainContext } from "../contexts/MainContext";

import {

  Card,

  Grid,

  Text,

  Image,

  Paragraph,
  Box,

  Heading,
} from "theme-ui";

import { GrTechnology } from "react-icons/gr";

import {
  MdRouter,
  MdLocalOffer,
  MdAutorenew,
  MdDoneAll,
  MdDone,
  MdFavorite,
  MdLockOpen,
  MdLock,
  MdOpenWith,
  MdReportProblem,
  MdSettingsInputComponent,
  MdThumbUp,
  MdTimeline,
  MdTouchApp,
  MdCall,
  MdClearAll,
  MdChatBubble,
  MdChatBubbleOutline,
  MdPhone,
  MdLocationOn,
  MdImportExport,
  MdAccessTime,
  MdShowChart,
  MdPhonelink,
  MdLayers,
  MdLocalHospital,
  MdMap,
  MdAllInclusive,
  MdLocationCity,
  MdPublic,
} from "react-icons/md";

export default function News({ leistungen }) {


  let { primaryNav, setPrimaryNav } = useContext(MainContext);

  return (
    <div>
      {/* <h2>Neuigkeiten</h2> */}

      <Grid
        gap={4}
        sx={{
          pt: 36,
          gridTemplateColumns: [
            "1fr", // small
            "1fr 1fr", // medium
            "1fr 1fr", // large
          ],
        }}
      >
        {leistungen.map((post) => {
          return (
            <Card key={post.path} bg="muted" sx={{ overflow: "hidden" }}>
              <Link href={post.path}>
                <a
                  sx={{ variant: "links.primary" }}
                  onClick={() => {
                    setPrimaryNav(false);
                  }}
                >
                  <Box sx={{ px: [0, 0], pb: [30, 30] }}>
                    <Heading as="h3" variant="bottom">
                      {post.title}
                    </Heading>
                    <Paragraph variant="bottom">{post.description}</Paragraph>
                    <Text variant="bottom">
                      <Text>{post.desc}</Text>
                    </Text>
                  </Box>

                  <Box sx={{ height: "200px", width: "100%" }}>
                    <Image
                      sx={{
                        display: "block",
                        maxHeight: "100%",
                        height: "auto",
                        width: "100%",
                        objectFit: "cover",
                      }}
                      src={`${post.image}`}
                    />
                  </Box>
                </a>
              </Link>
            </Card>
          );
        })}
      </Grid>
    </div>
  );
}
