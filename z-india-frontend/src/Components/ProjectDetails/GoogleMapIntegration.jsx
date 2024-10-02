import { Box, Typography } from "@mui/joy"


{/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14733.328580054478!2d88.4024946!3d22.6040688!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027556d47df317%3A0x788a7113b89bb791!2sSusmita%20Apartment!5e0!3m2!1sen!2sin!4v1727872102698!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */ }

const GoogleMapIntegration = () => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }} >
            <Typography level="h1" sx={{ color: '#00215b', fontWeight: '400', marginBottom: '.8rem' }} >Get Direction</Typography>
            <Box sx={{
                overflow: 'hidden',
                position: 'relative',
                paddingBottom: '30%',
                width: { xs: '80%', md: '40%' },
                height: '50%',
                margin: 'auto',
                borderRadius: '.9rem',
                boxShadow: 'lg',
                border: '2px solid #ffd7c1'
            }} >
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14733.328580054478!2d88.4024946!3d22.6040688!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027556d47df317%3A0x788a7113b89bb791!2sSusmita%20Apartment!5e0!3m2!1sen!2sin!4v1727872102698!5m2!1sen!2sin"
                    width="600"
                    height="450"
                    style={{ border: 0, width: '100%', height: '100%', left: 0, top: 0, position: 'absolute' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </Box>
        </Box>
    )
}

export default GoogleMapIntegration