import { Box, Typography } from "@mui/joy";
import React from "react";

const AboutLowerMidSection = () => {
  return (
    <Box
      sx={{
        // border: "1px solid red",
        display: "flex",
        width: "80%",
        justifyContent: "space-between",
        margin: { xs: "-10rem auto", sm: "auto" },
        flexDirection: { xs: "column", sm: "row" },
        gap: { xs: 2, sm: 0 },
        marginBottom: { xs: "1rem", sm: "0" },
      }}
    >
      {data.map((el, i) => (
        <Box
          sx={{
            // border: "1px solid green",
            p: "2rem 1rem 2rem 1rem",
            display: "flex",
            gap: 2,
            alignItems: "center",
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          }}
        >
          <Box
            sx={{
              // border: "1px solid yellow",
              p: ".5rem",
              backgroundColor: i == 0 || i == 2 ? "#f45906" : "#0020d3",
              color: "white",
              fontSize: "1.5rem",
              fontWeight: "600",
            }}
          >
            {" "}
            {el.number}{" "}
          </Box>
          <Box>
            <Typography
              level="title-lg"
              fontWeight="600"
              sx={{
                color: "#152242",
              }}
            >
              {el.label}
            </Typography>
            <Typography
              level="body-md"
              fontWeight="400"
              sx={{
                color: "#44454c",
                marginTop: ".5rem",
              }}
            >
              {el.info}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default AboutLowerMidSection;

let data = [
  {
    number: "01",
    label: "Consultation",
    info: "Understanding your needs thoroughly.",
  },
  {
    number: "02",
    label: "Planning",
    info: "Strategizing the perfect solution.",
  },
  {
    number: "03",
    label: "Innovation",
    info: "Implementing creative and modern ideas.",
  },
];
