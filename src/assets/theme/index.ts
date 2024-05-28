import { createTheme } from "@mui/material/styles";
import breakpoints from "./base/breakpoints";
import palette from "./base/palette";
import typography from "./base/typography";
import card from "./components/card";
import input from "./components/input";

export default createTheme({
    breakpoints: { ...breakpoints },
    typography: { ...typography },
    palette: { ...palette },

    components: {
        MuiInput: { ...input },
        MuiCard: { ...card },
    }
});