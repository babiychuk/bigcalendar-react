import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
  "palette": {
    "common": {
        "black": "#000",
        "white": "#fff"
    },
    "background": {
        "paper": "#fff",
        "default": "#f0f0f0",
        "footer": "#111d23",
    },
    "primary": {
        "light": "#2196f3",
        "main": "#1976d2",
        "dark": "#0d47a1",
        "contrastText": "#fff"
    },
    "secondary": {
        "light": "#ef5350",
        "main": "#c62828",
        "dark": "#b71c1c",
        "contrastText": "#fff"
    },
    "error": {
        "light": "#e57373",
        "main": "#f44336",
        "dark": "#d32f2f",
        "contrastText": "#fff"
    },
    "text": {
        "primary": "rgba(0, 0, 0, 0.9)",
        "secondary": "rgba(0, 0, 0, 0.6)",
        "disabled": "rgba(0, 0, 0, 0.38)",
        "hint": "rgba(0, 0, 0, 0.38)",        
    }
},
typography: {
    useNextVariants: true,
},
"@global": {
    body: {
      fontFamily: "Roboto,Helvetica,Arial,sans-serif",
    },
  },
// shadows: ["none"],

});

function withRoot(Component) {
  function WithRoot(props) {
    return (
      <MuiThemeProvider theme={theme}>        
        <CssBaseline />
        <Component {...props} />
      </MuiThemeProvider>
    );
  }

  return WithRoot;
}

export default withRoot;