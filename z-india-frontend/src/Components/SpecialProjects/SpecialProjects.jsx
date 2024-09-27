import { Box, Button, Typography } from "@mui/joy"
import "./ImageLayout.css"
import LinkIcon from '@mui/icons-material/Link';
import useIntersectionObserver from "../../Hooks/InterSectionObserver";
import { keyframes } from "@emotion/react";
import PropertyCard from "./PropertiSalesCard";


const slideUp = keyframes`
    0% {
        transform : translateY(100%);
        opacity: 0;
    }
    50%{
        transform : translateY(50%);
        opacity: .5;
    }
    100% {
        transform : translateY(0%);
        opacity: 1;
    }
`;


const popIn = keyframes`
  0% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(1);
  }
`;

const SpecialProject = () => {

    const [ref, hasIntersected] = useIntersectionObserver({ threshold: 0.1 });


    return (
        <>
            <Box ref={ref} sx={{
                animation: hasIntersected ? `${slideUp} .9s ease-out` : 'none',
                // border: '1px solid red',
                display: 'flex',
                justifyContent: 'center',
                flexDirection:'column'

            }} >
                <Box sx={{
                    // border: '1px solid green',
                    textAlign: 'center'
                }} >
                    <Typography level="h5" fontWeight="600" sx={{
                        color:"#f45905"
                    }}  >Properties</Typography>
                    <Typography level="h1" fontWeight="400" sx={{
                        color:'#00215b'
                    }} >For Sale</Typography>
                    <Typography level="h6" sx={{
                        color:'gray'
                    }} >Check out latest Prpoerties for sale</Typography>
                </Box>

                <PropertyCard/>
            </Box>
        </>
    )
}

export default SpecialProject

{/* <Typography level="body-sm" sx={{
                    color: '#f45905',
                    textTransform: 'uppercase',
                    fontWeight: '700',
                    textAlign: 'center',
                    margin: 'auto',
                }}>our works</Typography>
                <Typography level="h1" sx={{
                    color: '#16213e',
                    textAlign: 'center',
                    fontWeight: '700',
                    fontSize: '3rem',
                    margin: 'auto '
                }} >Our Special Projects</Typography>

                <div className="image-grid">
                    <div className="image-item tall">
                        <img className="image" src="https://rayoflightthemes.com/wordpress-themes/dustro-wordpress-theme/wp-content/uploads/2021/02/office-buildings-modern-glass-silhouettes-on-moder-PRADEQE-1-1.jpg" alt="Tall Building" />
                        <div className="middle">
                            <Typography level="body-sm" sx={{
                                color: 'white',
                                textTransform: 'uppercase'
                            }} >COMMERCIAL</Typography>

                            <Typography level="title-lg" sx={{
                                color: 'white',
                                fontWeight: '600',
                                marginTop: '1rem'
                            }} >Victoria View</Typography>
                            <Button sx={{
                                background: 'blue',
                                borderRadius: '0',
                                marginTop: '1rem'
                            }} >
                                <LinkIcon />
                            </Button>
                        </div>
                    </div>
                    <div className="image-item">
                        <img className="image" src="https://rayoflightthemes.com/wordpress-themes/dustro-wordpress-theme/wp-content/uploads/2021/02/round-building-CGY4TZ5-1.jpg" alt="Building 1" />
                        <div className="middle">
                            <Typography level="body-sm" sx={{
                                color: 'white',
                                textTransform: 'uppercase'
                            }} >COMMERCIAL</Typography>

                            <Typography level="title-lg" sx={{
                                color: 'white',
                                fontWeight: '600',
                                marginTop: '1rem'
                            }} >Alexiant Realtors</Typography>
                            <Button sx={{
                                background: 'blue',
                                borderRadius: '0',
                                marginTop: '1rem'
                            }} >
                                <LinkIcon />
                            </Button>
                        </div>
                    </div>
                    <div className="image-item">
                        <img className="image" src="https://rayoflightthemes.com/wordpress-themes/dustro-wordpress-theme/wp-content/uploads/2021/02/xrdes-PHgbWpst8UA-unsplash-1-2.jpg" alt="Building 1" />
                        <div className="middle">
                            <Typography level="body-sm" sx={{
                                color: 'white',
                                textTransform: 'uppercase'
                            }} >Land</Typography>

                            <Typography level="title-lg" sx={{
                                color: 'white',
                                fontWeight: '600',
                                marginTop: '1rem'
                            }} >Property Groove</Typography>
                            <Button sx={{
                                background: 'blue',
                                borderRadius: '0',
                                marginTop: '1rem'
                            }} >
                                <LinkIcon />
                            </Button>
                        </div>
                    </div>
                    <div className="image-item">
                        <img className="image" src="https://rayoflightthemes.com/wordpress-themes/dustro-wordpress-theme/wp-content/uploads/2021/02/office-building-P6EY7D6-1-3.jpg" alt="Building 2" />
                        <div className="middle">
                            <Typography level="body-sm" sx={{
                                color: 'white',
                                textTransform: 'uppercase'
                            }} >COMMERCIAL</Typography>

                            <Typography level="title-lg" sx={{
                                color: 'white',
                                fontWeight: '600',
                                marginTop: '1rem'
                            }} >Realty Natives</Typography>
                            <Button sx={{
                                background: 'blue',
                                borderRadius: '0',
                                marginTop: '1rem'
                            }} >
                                <LinkIcon />
                            </Button>
                        </div>
                    </div>
                    <div className="image-item">
                        <img className="image" src="https://rayoflightthemes.com/wordpress-themes/dustro-wordpress-theme/wp-content/uploads/2021/02/scott-webb-kAJE-3_4zHE-unsplash-1-2.jpg" alt="Building 3" />
                        <div className="middle">
                            <Typography level="body-sm" sx={{
                                color: 'white',
                                textTransform: 'uppercase'
                            }} >Residentials</Typography>

                            <Typography level="title-lg" sx={{
                                color: 'white',
                                fontWeight: '600',
                                marginTop: '1rem'
                            }} >Realty Zen</Typography>
                            <Button sx={{
                                background: 'blue',
                                borderRadius: '0',
                                marginTop: '1rem'
                            }} >
                                <LinkIcon />
                            </Button>
                        </div>
                    </div>
                </div> */}