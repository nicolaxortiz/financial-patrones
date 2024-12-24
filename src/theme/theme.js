import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: [
      "system-ui",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  palette: {
    action: {
      disabledBackground: "#697987",
      disabled: "#D0D0D0",
    },
    alabaster: {
      light: "#F9F9F9",
      main: "#EEF0EB",
      dark: "#c4cdc6",
    },
    prussianBlue: {
      light: "#697c99",
      main: "#384b66",
      dark: "#153243",
    },
    indigoDye: {
      light: "#455b7c",
      main: "#284B63",
      dark: "#384b66",
    },
    icon: {
      main: "#8f8f8f",
    },
  },
});
