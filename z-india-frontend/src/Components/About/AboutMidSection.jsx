import { Box, Typography } from "@mui/joy";
import React from "react";
import deal from "../../Assets/deal.jpg";
import budhan_saha from "../../Assets/budhan_saha.jpeg";

const AboutMidSection = () => {
  return (
    <Box
      sx={{
        // border: "2px solid teal",
        display: "flex",
        gap: 2,
        width: { xs: "96%", sm: "90%" },
        margin: { xs: "13rem auto", sm: "2.6rem auto" },
        flexDirection: { xs: "column", sm: "row" },
      }}
    >
      <Box
        sx={{
          //   border: "1px solid red",
          width: { xs: "100%", sm: "50%" },
        }}
      >
        <img src={deal} alt="DEAL" style={{ width: "100%", height: "100%" }} />
      </Box>

      <Box
        sx={{
          //   border: "1px solid green",
          width: { xs: "100%", sm: "50%" },
        }}
      >
        <Box>
          <Typography
            level="body-sm"
            sx={{
              color: "#fa5608",
              fontWeight: "xl",
            }}
          >
            ABOUT US
          </Typography>
          <Typography
            level="body-sm"
            sx={{
              fontWeight: "xl",
              color: "#152242",
              fontSize: "clamp(1.875rem, 1.3636rem + 2.1818vw, 3.4rem)",
              lineHeight: { xs: "2rem", sm: "3.5rem" },
              marginTop: "2rem",
            }}
          >
            We're providing the best <br /> customer service
          </Typography>

          <Box
            sx={{
              borderLeft: "6px solid #001ed4",
              display: "flex",
              justifyContent: { xs: "center", sm: "space-around" },
              alignItems: "center",
              backgroundColor: "#f6f6f6",
              marginTop: "2rem",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <Box
              sx={{
                // border: "2px solid orange",
                width: { xs: "30%", sm: "20%" },
                pt: { xs: 1, sm: 0 },
              }}
            >
              <img src={budhan_saha} alt="CEO" style={{ width: "100%" }} />
            </Box>

            <Box>
              <Box>
                <Typography
                  level="body-md"
                  sx={{
                    color: "#44454c",
                  }}
                >
                  At Z-INDIA-REALTY, we believe in building homes that <br />{" "}
                  not only shelter but also inspire lives for generations
                </Typography>

                <Typography
                  level="title-lg"
                  sx={{
                    color: "#152242",
                    marginTop: ".6rem",
                  }}
                >
                  M/S Bidhan Saha, CEO
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        <Typography
          level="body-md"
          sx={{
            color: "#44454c",
            marginTop: "2rem",
          }}
        >
          Our vision at Z-INDIA-REALTY is simple: to create spaces that blend
          innovation, comfort, and sustainability. We are driven by a passion
          for excellence, ensuring that every project stands as a testament to
          trust, quality, and long-lasting relationships with our clients.
        </Typography>
      </Box>
    </Box>
  );
};

export default AboutMidSection;
