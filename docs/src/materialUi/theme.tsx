import { createMuiTheme } from "@material-ui/core/styles";
import { indigo, red, teal } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: teal,
    error: red,
    background: {
      default: "#fff"
    }
  }
});

export default theme;
