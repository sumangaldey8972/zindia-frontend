import { Box, Button, Typography } from "@mui/joy"
import "./ImageLayout.css"
import LinkIcon from '@mui/icons-material/Link';

const SpecialProject = () => {
    return (
        <>
            <Box>
                <Typography level="body-sm" sx={{
                    color: '#f45905',
                    textTransform: 'uppercase',
                    fontWeight: '700',
                    textAlign: 'center',
                    margin: 'auto'
                }}  >our works</Typography>
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
                </div>
            </Box>
        </>
    )
}

export default SpecialProject