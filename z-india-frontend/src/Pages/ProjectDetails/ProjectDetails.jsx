<<<<<<< Updated upstream

import { Box, Button, Chip, CssBaseline, CssVarsProvider, Divider, IconButton, Stack, StyledEngineProvider, Typography } from "@mui/joy";
import { styles } from "../../styles"
=======
import {
  Box,
  Button,
  Chip,
  CssBaseline,
  CssVarsProvider,
  Divider,
  Stack,
  StyledEngineProvider,
  Typography,
} from "@mui/joy";
import { styles } from "../../styles";
import Navbar from "./../../Components/Navbar/Navbar";
import NavbarV2 from "../../Components/Navbar/Navbar-v2";
import HeaderSection from "../../Components/HeaderSection/HeaderSection";
import Search from "../../Components/Search/Search";
>>>>>>> Stashed changes
import { Container, Grid, useMediaQuery } from "@mui/material";

import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import CropIcon from "@mui/icons-material/Crop";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import StairsIcon from "@mui/icons-material/Stairs";
import ExploreIcon from "@mui/icons-material/Explore";
import CakeIcon from "@mui/icons-material/Cake";
import DoorSlidingIcon from "@mui/icons-material/DoorSliding";
import StorefrontIcon from "@mui/icons-material/Storefront";
import DisplaySettingsIcon from "@mui/icons-material/DisplaySettings";
import MapIcon from "@mui/icons-material/Map";
import DirectionsTransitIcon from "@mui/icons-material/DirectionsTransit";
import AirlinesIcon from "@mui/icons-material/Airlines";
import { useEffect, useState } from "react";
import ContactUs from "../../Components/ContactUs/ContactUs";
<<<<<<< Updated upstream
import GoogleMapIntegration from "../../Components/ProjectDetails/GoogleMapIntegration";
import NavbarV2 from "../../Common/Navbar/Navbar-v2";
import Sidebar from "../../Common/Sidebar/Sidebar";
import HeaderSection from "../../Common/HeaderSection/HeaderSection";
import Search from "../../Common/Search/Search";
import Footer from "../../Common/Footer/Footer";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Link } from "react-router-dom";
=======
import Sidebar from "../../Components/Sidebar/Sidebar";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

// asset images
import main_photo from "../../Assets/Main_photo.jpeg";
import outside_photo_1 from "../../Assets/outside_view_1.jpg";
import outside_photo_2 from "../../Assets/outside_view_2.jpg";
>>>>>>> Stashed changes

const ProjectDetails = () => {
  // Scroll to top on component mount

  const images = [main_photo, outside_photo_1, outside_photo_2];

<<<<<<< Updated upstream
    const [showMore, setShowMore] = useState(false);
    const flat_name = window.location.href.split('/')[3]
    console.log(flat_name)
=======
  const [showMore, setShowMore] = useState(false);
>>>>>>> Stashed changes

  const description = `
    Welcome to your future home, located in the heart of Laketown, a prime residential area known for its excellent connectivity and thriving community. 
    This under-construction residential building offers spacious 2BHK and 3BHK apartments designed to provide modern comfort and convenience.
    With a total of 8 floors, each apartment comes with easy access to a lift and dedicated parking, ensuring a hassle-free living experience.
    The property is ideally situated just 6 km from major landmarks like Dumdum Metro, Belgachia Metro, and Netaji Subhas Chandra Bose International Airport.
    For those working or studying in Bidhannagar, it's only a short commute away. Experience the perfect blend of accessibility and tranquility in this upcoming residential complex.
    Surrounded by essential amenities and well-connected transport hubs, it’s the ideal choice for families or individuals.
    `;

  const lines = description.split("\n").filter(Boolean);
  const visibleLines = lines.slice(0, 2).join("\n");

<<<<<<< Updated upstream
    useEffect(() => {
        document.title = 'Susmita Apartment - Laketown'
        window.scrollTo(0, 0);
    }, []);
=======
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
>>>>>>> Stashed changes

  return (
    <>
      <CssBaseline />
      <NavbarV2 />
      <Sidebar />
      <Box
        component="main"
        sx={{
          height: "calc(100vh - 55px)",
          margin: "auto",
        }}
      >
        <Stack
          sx={{
            backgroundColor: "background.surface",
            px: { xs: 2, md: 4 },
            py: 2,
            borderBottom: "1px solid",
            borderColor: "divider",
          }}
        >
          <HeaderSection />
          <Search />
        </Stack>

<<<<<<< Updated upstream
    return (
        <>
            <CssBaseline />
            <NavbarV2 />
            <Sidebar />
            {
                flat_name == 'menoka_appartment_laketown' ? <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    gap: '1rem',
                    alignItems: 'center'
                }} >
                    <Typography sx={{
                        fontSize: 'clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)',
                        color: '#00215b'
                    }} >Stay tuned , will be available soon..</Typography>
                    <Typography component={Link} to="/" sx={{
                        fontSize: 'clamp(1.875rem, 1.3636rem + 2.1818vw, 2rem)',
                        color: '#00215b'
                    }} startDecorator={
                        <KeyboardBackspaceIcon sx={{
                            fontSize: 'clamp(1.875rem, 1.3636rem + 2.1818vw, 2rem)',
                            color: '#00215b'
                        }} />
                    } >
                        Go Back
                    </Typography>

                </Box> : <Box component="main" sx={{
                    height: 'calc(100vh - 55px)',
                    margin: 'auto',
                }}>
                    <Stack
                        sx={{
                            backgroundColor: 'background.surface',
                            px: { xs: 2, md: 4 },
                            py: 2,
                            borderBottom: '1px solid',
                            borderColor: 'divider',
                        }}
                    >
                        <HeaderSection />
                        <Search />
                    </Stack>

                    <Stack sx={{
                        padding: '1rem',
                        display: 'flex',
                        alignItems: 'flex-end',
                        marginTop: '1rem'
                    }} >
                        <Button variant="solid" color="primary" sx={{
                            backgroundColor: '#f45905',
                            fontSize: '1.5rem'
                        }}>What are you waiting for ? Contact Now</Button>
                    </Stack>

                    <Container maxWidth="lg" sx={{ padding: 1 }}>
                        <Grid container spacing={2} sx={{ height: '100%' }} >
                            <Grid item xs={12} sm={6} sx={{ height: '100%', }}>
                                <Chip startDecorator={<AccessAlarmIcon />} sx={{ color: 'white', backgroundColor: 'purple', mb: 1 }} >4 people already contacted this week</Chip>
                                <Box
                                    sx={{
                                        bgcolor: 'primary.main',
                                        // color: 'white',
                                        // padding: 1,
                                        borderRadius: '1rem',
                                        textAlign: 'center',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        height: '100%',
                                        border: '2px solid #ffd7c1'
                                    }}
                                >
                                    <img src={main_photo} alt="" style={{
                                        width: '50%',
                                        height: 'auto',
                                        maxHeight: '100%',
                                        // objectFit: 'cover'
                                    }} />
                                </Box>

                            </Grid>
                            <Grid item xs={12} sm={6} sx={{ height: '100%' }}>
                                <Box
                                    sx={{
                                        bgcolor: '#ffe9de',
                                        padding: 2,
                                        textAlign: 'center',
                                        borderRadius: '1rem',
                                        textAlign: 'center',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '3rem',
                                        height: '100%',
                                        // border: '1px solid teal',

                                    }}
                                >
                                    <Stack direction='row' justifyContent="space-between" sx={{
                                        padding: 1,
                                    }} >
                                        <Box>
                                            <Typography level="title-md" color='neutral' fontWeight="400" startDecorator={
                                                <ImportContactsIcon />
                                            } >Area</Typography>
                                            <Typography level="body-md" fontWeight="600">1145/1346/1421 sqft</Typography>
                                        </Box>

                                        <Box sx={{
                                            display: 'flex',
                                            alignItems: 'flex-end',
                                            flexDirection: 'column',
                                        }} >
                                            <Typography level="title-md" color='neutral' fontWeight="400" startDecorator={
                                                <StairsIcon />
                                            } >Configuration</Typography>
                                            <Typography level="body-md" fontWeight="600">2 bedrooms, 3 bedrooms, <br /> 1 balcony, 2 balcony</Typography>
                                        </Box>
                                    </Stack>

                                    <Stack direction='row' justifyContent="space-between" sx={{
                                        padding: 1
                                    }} >
                                        <Box>
                                            <Typography level="title-md" color='neutral' fontWeight="400" startDecorator={
                                                <ImportContactsIcon />
                                            } >Address</Typography>
                                            <Typography level="body-md" fontWeight="600">Plot no - 803, Laketown, Kolkata, 700089</Typography>
                                        </Box>

                                        <Box sx={{
                                            display: 'flex',
                                            alignItems: 'flex-end',
                                            flexDirection: 'column',

                                        }} >
                                            <Typography level="title-md" color='neutral' fontWeight="400" startDecorator={
                                                <StairsIcon />
                                            } >Floors</Typography>
                                            <Typography level="body-md" fontWeight="600">8 floors</Typography>
                                        </Box>
                                    </Stack>

                                    <Stack direction='row' justifyContent="space-between" sx={{
                                        padding: 1
                                    }} >
                                        <Box>
                                            <Typography level="title-md" color='neutral' fontWeight="400" startDecorator={<ExploreIcon />} >Facing</Typography>
                                            <Typography level="body-md" fontWeight="600">EAST, FRONT SIDE LAKE</Typography>
                                        </Box>

                                        <Box sx={{
                                            display: 'flex',
                                            alignItems: 'flex-end',
                                            flexDirection: 'column',

                                        }}>
                                            <Typography level="title-md" color='neutral' fontWeight="400" startDecorator={
                                                <DoorSlidingIcon />
                                            } >Overlooking</Typography>
                                            <Typography level="body-md" fontWeight="600">Main Road, Metro Station in 6 km</Typography>
                                        </Box>
                                    </Stack>

                                    <Stack direction='row' justifyContent="space-between" sx={{
                                        padding: 1
                                    }} >
                                        <Box>
                                            <Typography level="title-md" color='neutral' fontWeight="400" startDecorator={
                                                <CakeIcon />
                                            } >Posession in</Typography>
                                            <Typography level="body-md" fontWeight="600">May 25</Typography>
                                        </Box>

                                        <Box sx={{
                                            display: 'flex',
                                            alignItems: 'flex-end',
                                            flexDirection: 'column',

                                        }}>
                                            <Typography level="title-md" color='neutral' fontWeight="400" startDecorator={
                                                <StorefrontIcon />
                                            } >Near by places</Typography>
                                            <Typography level="body-md" fontWeight="600">Jaya Cinema Hall</Typography>
                                        </Box>
                                    </Stack>
                                </Box>
                            </Grid>
                        </Grid>
                        <Divider sx={{ mt: '2rem' }} />
                    </Container>

                    <GoogleMapIntegration />

                    <Container maxWidth='lg' sx={{ padding: 2, mt: '3rem', border: '2px solid #ffe9de', borderRadius: '.8rem' }} >
                        <Box>
                            <Stack sx={{ display: 'flex', flexDirection: 'row', gap: '1rem' }} >
                                <Box>
                                    <img src="https://static.99acres.com/universalapp/img/landmarkGroup.png" alt="" />
                                </Box>
                                <Box>
                                    <Typography level="h3" fontWeight='600' >
                                        Places Nearby
                                    </Typography>

                                    <Typography level="body-md" color="neutral" >
                                        Bidhannagar, VIP Road, Ester Metropolitan Bypass road
                                    </Typography>
                                </Box>
                            </Stack>
                        </Box>

                        <Box>
                            <Stack gap={2} mt={2} sx={{
                                flexDirection: { sm: 'column', md: 'row' },
                                alignItems: "flex-start"
                            }} >
                                <Box sx={{ border: '2px solid  #ffd7c1', padding: '.7rem', borderRadius: '.7rem' }} >
                                    <Typography startDecorator={<MapIcon />} level="body-lg" color='neutral' fontWeight='600' > Bidhannagar </Typography>
                                </Box>
                                <Box sx={{ border: '2px solid  #ffd7c1', padding: '.7rem', borderRadius: '.7rem' }} >
                                    <Typography startDecorator={<DirectionsTransitIcon />} level="body-lg" color='neutral' fontWeight='600' > Dumdum Metro </Typography>
                                </Box>
                                <Box sx={{ border: '2px solid  #ffd7c1', padding: '.7rem', borderRadius: '.7rem' }} >
                                    <Typography startDecorator={<DirectionsTransitIcon />} level="body-lg" color='neutral' fontWeight='600' > Belgachia Metro </Typography>
                                </Box>
                                <Box sx={{ border: '2px solid  #ffd7c1', padding: '.7rem', borderRadius: '.7rem' }} >
                                    <Typography startDecorator={<AirlinesIcon />} level="body-lg" color='neutral' fontWeight='600' > Airport 6km </Typography>
                                </Box>
                            </Stack>
                        </Box>
                    </Container>

                    <Container maxWidth='lg' sx={{ padding: 2, mt: '3rem' }} >
                        <Box>
                            <Typography level="title-lg" color='neutral' >About Property</Typography>
                            <Typography level="body-md" color="neutral" >Address : PLOT NO-803, LAKE TOWN, BLOCK-A, KOLKATA-700089</Typography>
                            <Box>
                                <Typography
                                    variant="body1"
                                    style={{ whiteSpace: 'pre-line', display: 'inline' }}
                                >
                                    {showMore ? description : visibleLines}
                                </Typography>


                                {lines.length > 3 && (
                                    <Button
                                        variant="text"
                                        onClick={() => setShowMore(!showMore)}
                                        sx={{
                                            display: 'inline',
                                            padding: 0,
                                            minWidth: 'auto',
                                            marginLeft: '5px',
                                            verticalAlign: 'baseline',
                                            textTransform: 'none',
                                        }}
                                    >
                                        {showMore ? 'Show Less' : 'more..'}
                                    </Button>
                                )}
                            </Box>
                        </Box>
                    </Container>


                    <ContactUs />
                    <Footer />
                </Box >
            }


        </>
    )
}

export default ProjectDetails
=======
        <Stack
          sx={{
            padding: "1rem",
            display: "flex",
            alignItems: "flex-end",
            marginTop: "1rem",
          }}
        >
          <Button
            variant="solid"
            color="primary"
            sx={{
              backgroundColor: "#f45905",
              fontSize: "1.5rem",
            }}
          >
            What are you waiting for ? Contact Now
          </Button>
        </Stack>

        {/* main container */}
        <Container maxWidth="lg" sx={{ padding: 1 }}>
          <Grid
            container
            spacing={2}
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "center",
            }}
          >
            {/* left image container */}
            <Grid
              item
              xs={12}
              sm={6}
              sx={{
                height: { xs: "auto", sm: "100%" },
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "start",
              }}
            >
              <Chip
                startDecorator={<AccessAlarmIcon />}
                sx={{ color: "white", backgroundColor: "purple", mb: 1 }}
              >
                4 people already contacted this week
              </Chip>
              <Box
                sx={{
                  bgcolor: "primary.main",
                  // color: 'white',
                  // padding: 1,
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "50%",
                  border: "2px solid #ffd7c1",
                  borderRadius: "1rem",
                  flexGrow: 1,
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                {/* <img
                  src={main_photo}
                  alt=""
                  style={{
                    width: "50%",
                    height: "auto",
                    maxHeight: "100%",
                    // objectFit: 'cover'
                  }}
                /> */}

                <Carousel
                  showArrows={false}
                  showStatus={false}
                  showThumbs={false}
                  stopOnHover={false}
                  showIndicators={true}
                  autoPlay={true}
                  axis="horizontal"
                  verticalSwipe="natural"
                  interval={4000}
                  transitionTime={800}
                  swipeScrollTolerance={100}
                  swipeable={true}
                  emulateTouch={true}
                  infiniteLoop={true}
                  useKeyboardArrows={true}
                  //   width={300}
                  dynamicHeight={true}
                >
                  {images.map((img, index) => (
                    <div key={index}>
                      <img
                        src={img}
                        alt={`Slide ${index + 1}`}
                        style={{
                          height: "420px",
                          width: "100%",
                          objectFit: "contain",
                          borderRadius: "1rem",
                        }}
                      />
                    </div>
                  ))}
                </Carousel>
              </Box>
            </Grid>

            {/* right text container */}
            <Grid
              item
              xs={12}
              sm={6}
              sx={{ height: { xs: "auto", sm: "100%" } }}
            >
              <Box
                sx={{
                  bgcolor: "#ffe9de",
                  padding: 2,
                  textAlign: "center",
                  borderRadius: "1rem",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  gap: "3rem",
                  height: "100%",
                  // border: '1px solid teal',
                }}
              >
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  sx={{
                    padding: 1,
                  }}
                >
                  <Box>
                    <Typography
                      level="title-md"
                      color="neutral"
                      fontWeight="400"
                      startDecorator={<ImportContactsIcon />}
                    >
                      Area
                    </Typography>
                    <Typography level="body-md" fontWeight="600">
                      1145/1346/1421 sqft
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-end",
                      flexDirection: "column",
                    }}
                  >
                    <Typography
                      level="title-md"
                      color="neutral"
                      fontWeight="400"
                      startDecorator={<StairsIcon />}
                    >
                      Configuration
                    </Typography>
                    <Typography level="body-md" fontWeight="600">
                      2 bedrooms, 3 bedrooms, <br /> 1 balcony, 2 balcony
                    </Typography>
                  </Box>
                </Stack>

                <Stack
                  direction="row"
                  justifyContent="space-between"
                  sx={{
                    padding: 1,
                  }}
                >
                  <Box>
                    <Typography
                      level="title-md"
                      color="neutral"
                      fontWeight="400"
                      startDecorator={<ImportContactsIcon />}
                    >
                      Address
                    </Typography>
                    <Typography level="body-md" fontWeight="600">
                      Plot no - 803, Laketown, Kolkata, 700089
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-end",
                      flexDirection: "column",
                    }}
                  >
                    <Typography
                      level="title-md"
                      color="neutral"
                      fontWeight="400"
                      startDecorator={<StairsIcon />}
                    >
                      Floors
                    </Typography>
                    <Typography level="body-md" fontWeight="600">
                      8 floors
                    </Typography>
                  </Box>
                </Stack>

                <Stack
                  direction="row"
                  justifyContent="space-between"
                  sx={{
                    padding: 1,
                  }}
                >
                  <Box>
                    <Typography
                      level="title-md"
                      color="neutral"
                      fontWeight="400"
                      startDecorator={<ExploreIcon />}
                    >
                      Facing
                    </Typography>
                    <Typography level="body-md" fontWeight="600">
                      EAST, FRONT SIDE LAKE
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-end",
                      flexDirection: "column",
                    }}
                  >
                    <Typography
                      level="title-md"
                      color="neutral"
                      fontWeight="400"
                      startDecorator={<DoorSlidingIcon />}
                    >
                      Overlooking
                    </Typography>
                    <Typography level="body-md" fontWeight="600">
                      Main Road, Metro Station in 6 km
                    </Typography>
                  </Box>
                </Stack>

                <Stack
                  direction="row"
                  justifyContent="space-between"
                  sx={{
                    padding: 1,
                  }}
                >
                  <Box>
                    <Typography
                      level="title-md"
                      color="neutral"
                      fontWeight="400"
                      startDecorator={<CakeIcon />}
                    >
                      Posession in
                    </Typography>
                    <Typography level="body-md" fontWeight="600">
                      May 25
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-end",
                      flexDirection: "column",
                    }}
                  >
                    <Typography
                      level="title-md"
                      color="neutral"
                      fontWeight="400"
                      startDecorator={<StorefrontIcon />}
                    >
                      Near by places
                    </Typography>
                    <Typography level="body-md" fontWeight="600">
                      Jaya Cinema Hall
                    </Typography>
                  </Box>
                </Stack>
              </Box>
            </Grid>
          </Grid>
          <Divider sx={{ mt: "2rem" }} />
        </Container>

        <Container
          maxWidth="lg"
          sx={{
            padding: 2,
            mt: "3rem",
            border: "2px solid #ffe9de",
            borderRadius: ".8rem",
          }}
        >
          <Box>
            <Stack sx={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
              <Box>
                <img
                  src="https://static.99acres.com/universalapp/img/landmarkGroup.png"
                  alt=""
                />
              </Box>
              <Box>
                <Typography level="h3" fontWeight="600">
                  Places Nearby
                </Typography>

                <Typography level="body-md" color="neutral">
                  Bidhannagar, VIP Road, Ester Metropolitan Bypass road
                </Typography>
              </Box>
            </Stack>
          </Box>

          <Box>
            <Stack
              gap={2}
              mt={2}
              sx={{
                flexDirection: { sm: "column", md: "row" },
                alignItems: "flex-start",
              }}
            >
              <Box
                sx={{
                  border: "2px solid  #ffd7c1",
                  padding: ".7rem",
                  borderRadius: ".7rem",
                }}
              >
                <Typography
                  startDecorator={<MapIcon />}
                  level="body-lg"
                  color="neutral"
                  fontWeight="600"
                >
                  {" "}
                  Bidhannagar{" "}
                </Typography>
              </Box>
              <Box
                sx={{
                  border: "2px solid  #ffd7c1",
                  padding: ".7rem",
                  borderRadius: ".7rem",
                }}
              >
                <Typography
                  startDecorator={<DirectionsTransitIcon />}
                  level="body-lg"
                  color="neutral"
                  fontWeight="600"
                >
                  {" "}
                  Dumdum Metro{" "}
                </Typography>
              </Box>
              <Box
                sx={{
                  border: "2px solid  #ffd7c1",
                  padding: ".7rem",
                  borderRadius: ".7rem",
                }}
              >
                <Typography
                  startDecorator={<DirectionsTransitIcon />}
                  level="body-lg"
                  color="neutral"
                  fontWeight="600"
                >
                  {" "}
                  Belgachia Metro{" "}
                </Typography>
              </Box>
              <Box
                sx={{
                  border: "2px solid  #ffd7c1",
                  padding: ".7rem",
                  borderRadius: ".7rem",
                }}
              >
                <Typography
                  startDecorator={<AirlinesIcon />}
                  level="body-lg"
                  color="neutral"
                  fontWeight="600"
                >
                  {" "}
                  Airport 6km{" "}
                </Typography>
              </Box>
            </Stack>
          </Box>
        </Container>

        <Container maxWidth="lg" sx={{ padding: 2, mt: "3rem" }}>
          <Box>
            <Typography level="title-lg" color="neutral">
              About Property
            </Typography>
            <Typography level="body-md" color="neutral">
              Address : PLOT NO-803, LAKE TOWN, BLOCK-A, KOLKATA-700089
            </Typography>
            <Box>
              <Typography
                variant="body1"
                style={{ whiteSpace: "pre-line", display: "inline" }}
              >
                {showMore ? description : visibleLines}
              </Typography>

              {lines.length > 3 && (
                <Button
                  variant="text"
                  onClick={() => setShowMore(!showMore)}
                  sx={{
                    display: "inline",
                    padding: 0,
                    minWidth: "auto",
                    marginLeft: "5px",
                    verticalAlign: "baseline",
                    textTransform: "none",
                  }}
                >
                  {showMore ? "Show Less" : "more.."}
                </Button>
              )}
            </Box>
          </Box>
        </Container>
        <ContactUs />
        <Footer />
      </Box>
    </>
  );
};

export default ProjectDetails;
>>>>>>> Stashed changes
