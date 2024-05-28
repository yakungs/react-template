import { TypographyOptions } from "@mui/material/styles/createTypography";

const baseProperties = {
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
};

const defaultProperties = {
    lineHeight: "26px",
    letterSpacing: "0.6px",
    WebkitTextStrokeWidth: "0.15px",
}

const typography: TypographyOptions = {
    fontFamily: "'PSL Kittithada Pro'",
    fontWeightLight: baseProperties.fontWeightLight,
    fontWeightRegular: baseProperties.fontWeightRegular,
    fontWeightMedium: baseProperties.fontWeightMedium,
    fontWeightBold: baseProperties.fontWeightBold,
    allVariants: {
        ...defaultProperties
    },

    h1: {
        fontWeight: baseProperties.fontWeightBold,
    },

    h2: {
        fontWeight: baseProperties.fontWeightBold,
    },

    h3: {
        fontWeight: baseProperties.fontWeightBold,
    },

    h4: {
        fontWeight: baseProperties.fontWeightBold,
    },

    h5: {
        fontWeight: baseProperties.fontWeightBold,
        fontSize: 26,
    },

    h6: {
        fontWeight: baseProperties.fontWeightBold,
        fontSize: 24,
    },

    body1: {
        fontSize: 22,
    },

    body2: {
        fontSize: 20,
    }
}

export default typography;