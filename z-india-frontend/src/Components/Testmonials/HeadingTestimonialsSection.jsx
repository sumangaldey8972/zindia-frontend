import { Box, Typography } from "@mui/joy";
import React from "react";

const HeadingTestimonialsSection = () => {
  return (
    <>
      <Box
        sx={{
          //   border: "1px solid green",
          textAlign: "center",
          padding: "4rem 2rem 4rem",
          backgroundColor: "#171f3d",
          //   border: "1px double #F45905",
          outline: "4px solid #F45905",
          outlineOffset: "-19px",
          animation: "slideUp .5s ease-out",
          "@keyframes slideUp": {
            "0%": {
              transform: "translateY(100px)",
              opacity: 0,
            },
            "100%": {
              transform: "translateY(0)",
              opacity: 1,
            },
          },
        }}
      >
        <Typography
          level="body-sm"
          sx={{
            fontWeight: "xl",
            color: "#F45905",
          }}
        >
          TESTIMONALS
        </Typography>

        <Typography
          level="h1"
          sx={{
            fontWeight: "xl",
            fontSize: "clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)",
            color: "#ffffff",
            mt: "1rem",
          }}
        >
          Trusted by Many, Built on Trust
        </Typography>

        <Typography
          color="neutral"
          sx={{
            fontSize: "md",
            lineHeight: "lg",
            fontWeight: "md",
          }}
        >
          See why our clients choose Z-INDIA-REALTY for their real estate
          journey.
        </Typography>
      </Box>
    </>
  );
};

export default HeadingTestimonialsSection;
