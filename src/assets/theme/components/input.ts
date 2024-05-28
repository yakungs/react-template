import { Components } from "@mui/material";
import palette from "../base/palette";

const input: Components["MuiInput"] = {
    styleOverrides: {
        root: {
            lineHeight: "26px",
            backgroundColor: "white",
            border: `1px solid ${palette?.grey?.[300]}`,
            borderRadius: "5px",
            fontSize: "22px",
            minHeight: "40px",
            ":hover": {
                borderColor: palette?.grey?.[400],
            },
            "&.Mui-focused": {
                // @ts-ignore
                borderColor: palette.primary.light,
                boxShadow: "rgb(222, 205, 255) 0px 0px 0px 2px",
                "&.Mui-error": {
                    // @ts-ignore
                    borderColor: palette.error.light,
                    boxShadow: "rgb(255, 173, 181) 0px 0px 0px 2px",
                }
            },
            "&.Mui-focused:hover": {
                // @ts-ignore
                borderColor: palette.primary.light,
                boxShadow: "rgb(222, 205, 255) 0px 0px 0px 2px",
                "&.Mui-error": {
                    // @ts-ignore
                    borderColor: palette.error.light,
                    boxShadow: "rgb(255, 173, 181) 0px 0px 0px 2px",
                }
            },
            "&.Mui-disabled": {
                backgroundColor: palette?.grey?.[200],
            },
            "&.Mui-disabled:hover": {
                borderColor: palette?.grey?.[300],
            },
            "& .MuiInputAdornment-root": {
                padding: 0,
                margin: 0,
            },
            "& .MuiInputBase-input.Mui-disabled": {
                WebkitTextFillColor: palette?.grey?.[700],
            },
            "& .MuiInputBase-input.Mui-disabled::placeholder": {
                WebkitTextFillColor: palette?.grey?.[500],
            },
        },

        input: {
            padding: "3.2px 12px",
            "&::placeholder": {
                opacity: 1,
                color: palette?.grey?.[500],
            },
            ":-webkit-autofill": {
                borderRadius: "5px",
            },
        },
    },
};

export default input;
