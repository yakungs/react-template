import { Components } from "@mui/material";
import PSLxKittithada from '@assets/font/PSLxKittithada/PSLxKittithada.ttf'
import PSLxKittithadaItalic from '@assets/font/PSLxKittithada/PSLxKittithada_Italic.ttf'
import PSLxKittithadaBold from '@assets/font/PSLxKittithada/PSLxKittithada_Bold.ttf'
import PSLxKittithadaBoldItalic from '@assets/font/PSLxKittithada/PSLxKittithada_BoldItalic.ttf'
import RsuRegular from '@assets/font/rsu/RSU_Regular.ttf';
import RsuBold from '@assets/font/rsu/RSU_BOLD.ttf';
import { FontFaceType } from "@utils/Utilities";

const cssBaseline: Components["MuiCssBaseline"] = {
  styleOverrides: `
    @font-face {
      font-family: 'PSL Kittithada Pro';
      src: local('PSL Kittithada Pro'), local('PSL Kittithada Pro Regular'), url(${PSLxKittithada}) format('truetype');
      font-style: normal;
      font-weight: 400;
    }

    @font-face {
      font-family: 'PSL Kittithada Pro';
      src: local('PSL Kittithada Pro'), local('PSL Kittithada Pro Bold'), url(${PSLxKittithadaBold}) format('truetype');
      font-style: normal;
      font-weight: 700;
    }

    @font-face {
      font-family: 'PSL Kittithada Pro';
      src: local('PSL Kittithada Pro'), local('PSL Kittithada Pro Italic'), url(${PSLxKittithadaItalic}) format('truetype');
      font-style: italic;
      font-weight: 400;
    }
  
    @font-face {
      font-family: 'PSL Kittithada Pro';
      src: local('PSL Kittithada Pro'), local('PSL Kittithada Pro Bold Italic'), url(${PSLxKittithadaBoldItalic}) format('truetype');
      font-style: italic;
      font-weight: 700;
    }

    @font-face {
      font-family: 'RSU_Regular';
      src: url(${RsuRegular}) format('truetype');
      font-style: normal;
      font-weight: 600;
    }

    @font-face {
      font-family: 'RSU_Bold';
      src: url(${RsuBold}) format('truetype');
      font-style: normal;
      font-weight: 600;
    }
  `
};

export const fontFamilies: FontFaceType[] = [
  { fontFamily: "PSL Kittithada Pro", src: `url(${PSLxKittithada}) format('truetype')` },
  { fontFamily: "PSL Kittithada Pro", src: `url(${PSLxKittithadaBold}) format('truetype')` },
  { fontFamily: "PSL Kittithada Pro", src: `url(${PSLxKittithadaItalic}) format('truetype')` },
  { fontFamily: "PSL Kittithada Pro", src: `url(${PSLxKittithadaBoldItalic}) format('truetype')` },
  { fontFamily: "RSU_Regular", src: `url(${RsuRegular}) format('truetype')` },
  { fontFamily: "RSU_Bold", src: `url(${RsuBold}) format('truetype')` },
];

export default cssBaseline;