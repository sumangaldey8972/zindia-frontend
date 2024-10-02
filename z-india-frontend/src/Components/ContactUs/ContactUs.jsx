import { Box, Button, Grid, Stack, Textarea, Typography } from "@mui/joy"
import { Field, Form, Formik } from "formik";
import React from "react";
import { MaterialInput } from "../../Common/CustomInputs/CustomInputs";
import Snackbars from "../../Common/ToastMessage/ToastMessage";
import { formFields, initialValue, validationSchema } from "../../Common/FormFields/FormFields";



const ContactUs = () => {

    const [toastMessage, setToastMessage] = React.useState({
        bool: false,
        message: "",
        status: "",
    });
    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setToastMessage({ bool: false, message: toastMessage.message, status: toastMessage.status });
    };

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





    const handleSubmitForm = (details) => {
        console.log('after submit', details)
        setToastMessage({
            bool: true,
            message: "Your message was just received by us! will reach you shortly",
            status: "success"
        })
    }


    return (
        <>
            <Box>
                <Snackbars
                    status={toastMessage.status}
                    message={toastMessage.message}
                    open={toastMessage.bool}
                    handleClose={handleClose}
                />
                <Stack spacing={4} sx={{
                    width: '80%',
                    margin: '4rem auto',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexDirection: { sm: 'column', md: 'row' }
                }} >
                    <Box sx={{
                        width: { sm: '100%', md: '50%' }
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


                        <Formik initialValues={initialValue} validationSchema={validationSchema}
                            onSubmit={(values, { setSubmitting }) => {
                                handleSubmitForm(values)
                                setSubmitting(false)
                            }}
                        >{({ }) => {
                            return (
                                <Form>
                                    <Grid container spacing={4} sx={{ flexGrow: 1, marginTop: '1rem' }} >
                                        {
                                            formFields.map((el, i) => (
                                                el.name === 'message' ? <Grid xs={12} key={i} >
                                                    <Field name={el.name}>
                                                        {({ field }) => (
                                                            <Textarea
                                                                type={el.type}
                                                                placeholder={el.placeholder}
                                                                {...field}
                                                                minRows={4}
                                                                maxRows={6}
                                                                sx={{
                                                                    fontSize: '.8rem',
                                                                    borderRadius: '0'
                                                                }}
                                                                size="lg"
                                                            />
                                                        )}
                                                    </Field>
                                                </Grid> : <Grid xs={6} key={i} >
                                                    <MaterialInput
                                                        type={el.type}
                                                        label={el.type}
                                                        placeholder={el.placeholder}
                                                        name={el.name}
                                                    />
                                                </Grid>
                                            ))
                                        }
                                    </Grid>

                                    <Button type="submit" sx={{
                                        backgroundColor: '#f45905',
                                        marginTop: '3rem',
                                        borderRadius: '0',
                                        padding: '1rem 2.5rem 1rem 2.5rem',
                                        fontSize: '1.2rem'
                                    }} >
                                        Send
                                    </Button>
                                </Form>
                            )
                        }}

                        </Formik>
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

