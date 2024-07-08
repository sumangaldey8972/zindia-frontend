import { Box, Button, Grid, Input, Stack, styled, Textarea, Typography } from "@mui/joy"


const InputField = styled(Input)(({ theme }) => ({
    borderRadius: '0',
    fontSize: '.8rem'
}))

const ContactUs = () => {

    let typesArr = [
        {
            image: "https://rayoflightthemes.com/wordpress-themes/dustro-wordpress-theme/wp-content/uploads/2021/03/helmet.svg",
            heading: "High quality build",
            subHeading: "Reliable Construction Services Backed by Experience and Integrity"
        },
        {
            image: "https://rayoflightthemes.com/wordpress-themes/dustro-wordpress-theme/wp-content/uploads/2021/03/paint-brush.svg",
            heading: "Unique idea",
            subHeading: "Inventive Construction Ideas for Today's Challenges"
        },
        {
            image: "http://rayoflightthemes.com/wordpress-themes/dustro-wordpress-theme/wp-content/uploads/2021/03/screwdriver.svg",
            heading: "Modern Equipment",
            subHeading: "Technology-Driven Solutions for Modern Construction"
        }

    ]


    return (
        <>
            <Box>
                <Stack direction="row" spacing={4} sx={{
                    width: '80%',
                    margin: '4rem auto',
                    alignItems: 'center'
                }} >
                    <Box sx={{
                        width: '50%'
                    }} >
                        <Typography level="title-md" sx={{
                            fontWeight: '700',
                            textTransform: 'uppercase',
                            color: '#f45905',
                            fontSize: '.8rem'
                        }} > Appointment form </Typography>
                        <Typography level="h1" sx={{
                            color: '#16213e'
                        }} > Request a quote </Typography>
                        <Grid container spacing={4} sx={{ flexGrow: 1, marginTop: '1rem' }}>
                            <Grid xs={6}>
                                <InputField placeholder="First Name (required)" />
                            </Grid>
                            <Grid xs={6}>
                                <InputField placeholder="Last Name (required)" />
                            </Grid>
                            <Grid xs={6}>
                                <InputField placeholder="Email (required)" />
                            </Grid>
                            <Grid xs={6}>
                                <InputField placeholder="Phone number (required)" />
                            </Grid>
                            <Grid xs={12}>
                                <Textarea minRows={4} maxRows={6} sx={{
                                    fontSize: '.8rem',
                                    borderRadius: '0'
                                }} size="lg" placeholder="Leave us message" />
                            </Grid>
                        </Grid>

                        <Button sx={{
                            backgroundColor: '#f45905',
                            marginTop: '3rem',
                            borderRadius: '0',
                            padding: '1rem 2.5rem 1rem 2.5rem',
                            fontSize: '1.2rem'
                        }} >
                            Send
                        </Button>
                    </Box>

                    <Box>
                        <Stack direction="column" spacing={3} >
                            {
                                typesArr.map((el) => (
                                    <Stack key={el.heading} direction="row" spacing={2} >
                                        <Box sx={{
                                            width: '12%'
                                        }} >
                                            <img src={el.image} alt="" style={{ width: '100%' }} />
                                        </Box>
                                        <Box>
                                            <Typography level="title-lg" sx={{
                                                color: '#00215b',
                                                fontWeight: '700'
                                            }} >{el.heading}</Typography>
                                            <Typography level="body-sm" >{el.subHeading}</Typography>
                                        </Box>
                                    </Stack>
                                ))
                            }
                        </Stack>
                    </Box>
                </Stack >
            </Box >
        </>
    )
}

export default ContactUs