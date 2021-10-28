import { base } from "@theme-ui/presets";
import { escapeRegExp } from "lodash";
import { GrWheelchairActive } from "react-icons/gr";

const theme = {
  ...base,

  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: "inherit",
    monospace: "Menlo, monospace",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],

  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },

  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },

  letterSpacings: {
    body: "normal",
    caps: "0.2em",
  },

  colors: {
    text: "#0B2867",
    background: "#fff",
    primary: "#0B2867",
  },

  //edit
  breakpoints: ["40em", "52em", "64em"],

  layout: {
    container: {
      maxWidth: "1170px",
      m: 0,
      mx: "auto",
    },
  },

  // variants can use custom, user-defined names
  alerts: {
    // primary: {
    //   color: "background",
    //   bg: "primary",
    //   borderRadius: "0",
    //   px: [4, 4, 4],
    //   py: [2, 2, 2],
    // },
    // muted: {
    //   color: "text",
    //   bg: "muted",
    // },
  },

  // variants can use custom, user-defined names
  text: {
    p: {
      fontSize: 18,
    },

    heading: {
      // textAlign: "center",
      // backgroundColor: "#0B2867",
      // fontSize: [30, 24, 36, 48],
      // width: ["100%", "70%"],
      // mx: ["", "auto"],
      // display: "block",
      // color: "white",
      // letterSpacing: 0,
      // wordWrap: "break-word",
      // mt: [50, 100],
      // borderRadius: 2,
      // p: 3,
      pt: 5,
      color: "white",
      fontWeight: "700",
    },

    subheading: {
      // fontWeight: 300,
      // width: ['100%','70%'],
      // wordWrap: "break-word",
      // display: 'block',
      // fontSize: [4,6,28],
      // fontFamily: "heading",
      // fontWeight: "heading",
      // lineHeight: "heading",
      // padding: 0,
      // fontWeight: 300,
      // wordWrap: "break-word",
      color: "white",
      fontWeight: "300",
    },
  },

  // variants can use custom, user-defined names

  // variants can use custom, user-defined names
  links: {
    primary: {
      color: "primary",
      "&:hover": {
        cursor: "pointer",
      },
      "&:hover": {
        textDecoration: "underline",
      },
    },
    secondary: {

      color: "white",
      "&:hover": {
        cursor: "pointer",
      },
      "&:hover": {
        textDecoration: "underline",
      },
    },
  },

  // The Theme UI styles object is primarily used as a way to style MDX content

  styles: {
    ...base.styles,

    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
      color: "primary",
      fontSize: 18,
    },
    h1: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 5,
      margin: 0,
    },
    h2: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 4,
      margin: 0,
    },
    h3: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 3,
    },
    h4: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 2,
    },
    h5: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 1,
    },
    h6: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 0,
    },
    p: {
      color: "text",
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
    },
    a: {
      color: "red",
    },
    pre: {
      fontFamily: "monospace",
      overflowX: "auto",
      code: {
        color: "inherit",
      },
    },
    code: {
      fontFamily: "monospace",
      fontSize: "inherit",
    },
    table: {
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: 0,
    },
    th: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    td: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    img: {
      maxWidth: "100%",
    },

    p: {
      fontSize: 18,
    },

    text: {
      postheading: {
        // fontFamily: "heading",
        // fontSize: "heading",
        // fontWeight: "heading",
        // lineHeight: "heading",
        // padding: 0,
        // my: 0,
        // wordWrap: "break-word",
      },

      textbody: {
        mb: 4,
      },
    },

    headnavlink: {
      color: "#ffffff",
      alignSelf: "center",
      ml: [0, 3, 3],
      mr: [3, 0, 0],
      width: ["auto", "auto", "auto"],
      "&:hover": {
        cursor: "pointer",
        textDecoration: "underline",
      },
    },

    navlink: {
      color: "#0B2867",
      "&:hover": {
        cursor: "pointer",
        textDecoration: "underline",
      },
    },

    alertnavlink: {
      // color: "white",
      // fontWeight: 400,
      // "&:hover": {
      //   cursor: "pointer",
      //   textDecoration: "underline",
      // },
    },
  },
};

export default theme;
