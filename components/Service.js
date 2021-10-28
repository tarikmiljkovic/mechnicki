/** @jsxImportSource theme-ui */

import Head from "next/head";
import Link from 'next/link'

import { useContext } from "react";
import { MainContext } from "../contexts/MainContext";

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
  NavLink,
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


var services = [
  {
    name: "Expressverkehre",
    desc: " ",
    icon: (
      <MdAccessTime
        sx={{
          color: "#0B2867",
          fill: "#0B2867",
          width: "100%",
          height: "100%",
        }}
      />
    ),
  },
  {
    name: "Import-Export",
    desc: " ",
    icon: (
      <MdImportExport
        sx={{
          color: "#0B2867",
          fill: "#0B2867",
          width: "100%",
          height: "100%",
        }}
      />
    ),
  },
  {
    name: "100% Befriedigung",
    desc: " ",
    icon: (
      <MdDoneAll
        sx={{
          color: "#0B2867",
          fill: "#0B2867",
          width: "100%",
          height: "100%",
        }}
      />
    ),
  },
  {
    name: "100% Sicherung",
    desc: " ",
    icon: (
      <MdLock
        sx={{
          color: "#0B2867",
          fill: "#0B2867",
          width: "100%",
          height: "100%",
        }}
      />
    ),
  },
  // {
  //   name: "Abfall- und Wertstofftransport",
  //   desc: " ",
  //   icon: (
  //     <MdAutorenew
  //       sx={{
  //         color: "#002664",
  //         fill: "#002664",
  //         width: "100%",
  //         height: "100%",
  //       }}
  //     />
  //   ),
  // },
  {
    name: "FTL/LTL – Teil- und Komplettladungen",
    desc: " ",
    icon: (
      <MdLayers
        sx={{
          color: "#0B2867",
          fill: "#0B2867",
          width: "100%",
          height: "100%",
        }}
      />
    ),
  },
  {
    name: "alles umfassend",
    desc: " ",
    icon: (
      <MdAllInclusive
        sx={{
          color: "#0B2867",
          fill: "#0B2867",
          width: "100%",
          height: "100%",
        }}
      />
    ),
  },
];


export default function Service({leistungen}) {

  let { primaryNav, setPrimaryNav } = useContext(MainContext);

  return (
    <div>
      <h2>Services</h2>

      <Grid
        gap={4}
        sx={{
          gridTemplateColumns: [
            "1fr", // default to a stacked layout on small screens
            "1fr 1fr 1fr",
            "1fr 1fr 1fr 1fr", // use columns for larger screens
          ],
        }}
        // columns={([3, "1fr 1fr 1fr"], [2, "1fr 1fr"], [1, "1fr"])}
      >
        {services.map((service) => (
          <Card
          key={service.name}
            sx={{
              maxWidth: "100%",
              backgroundColor: "#EAEBEC",
              padding: "2rem",
            }}
          >
            <div
              sx={{
                height: "100px",
              }}
            >
              {service.icon}
            </div>
            <h3
              sx={{
                margin: 0,
                padding: 0,
                fontSize: "1em",
              }}
            >
              {service.name}
            </h3>

            <Text>{service.desc}</Text>
          </Card>
        ))}
      </Grid>

    </div>
  );}