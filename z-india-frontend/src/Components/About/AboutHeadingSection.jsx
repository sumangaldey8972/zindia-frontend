import { Box, Typography } from "@mui/joy";
import React from "react";

import heading_photo from "../../Assets/about-us-heading-photo.jpg";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";

const AboutHeadingSection = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row", md: "row" },
          justifyContent: "space-between",
          height: "60vh",
        }}
      >
        <Box
          sx={{
            // border: "1px solid green",
            width: { xs: "100%", sm: "50%", md: "50%" },
          }}
        >
          <Box
            sx={{
              //   border: "1px solid black",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              backgroundColor: "#f2f7fa",
              pt: { xs: 8 },
              pb: { xs: 8 },
            }}
          >
            <Box
              sx={{
                borderTop: "6px solid #f45905",
              }}
            >
              <Typography
                level="title-lg"
                sx={{
                  color: "#f45905",
                  // border: "1px solid red",
                }}
              >
                About Us
              </Typography>
              <Typography
                sx={{
                  fontWeight: "xl",
                  color: "#00215b",
                  fontSize: "clamp(1.875rem, 1.3636rem + 2.1818vw, 2rem)",
                }}
              >
                Z-INDIA REALTY
              </Typography>
              <Typography
                level="body-sm"
                sx={{
                  fontWeight: "sm",
                }}
              >
                CALL US TODAY
              </Typography>
              <Typography
                sx={{
                  fontWeight: "xl",
                  color: "#00215b",
                  fontSize: "clamp(1.875rem, 1.3636rem + 1.1818vw, 1rem)",
                }}
                startDecorator={<AddIcCallIcon />}
              >
                +91 9830643809
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            // border: "1px solid teal",#f2f7fa
            width: { xs: "100%", sm: "50%", md: "50%" },
          }}
        >
          <img
            src={heading_photo}
            alt="about-us"
            style={{ width: "100%", height: "100%" }}
          />
        </Box>
      </Box>
    </>
  );
};

export default AboutHeadingSection;
