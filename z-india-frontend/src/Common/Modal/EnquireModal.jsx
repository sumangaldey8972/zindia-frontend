import * as React from 'react';
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import Stack from '@mui/joy/Stack';
import { Box, Grid, ModalClose, styled, Textarea, Typography } from '@mui/joy';
import { Field, Form, Formik } from 'formik';
import { MaterialInput } from '../CustomInputs/CustomInputs';
import { formFields, initialValue, validationSchema } from '../FormFields/FormFields';
import Snackbars from "../../Common/ToastMessage/ToastMessage";

export default function EnquireModal({ open, setOpen }) {

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

    const handleSubmitForm = (details) => {
        console.log('after submit', details)
        setToastMessage({
            bool: true,
            message: "Your message was just received by us! will reach you shortly",
            status: "success"
        })
    }

    return (
        <React.Fragment>
            <Snackbars
                status={toastMessage.status}
                message={toastMessage.message}
                open={toastMessage.bool}
                handleClose={handleClose}
            />
            <Modal open={open} onClose={() => setOpen(false)}>
                <ModalDialog>
                    <ModalClose />
                    <DialogTitle sx={{
                        fontWeight: '700',
                        textTransform: 'uppercase',
                        color: '#f45905',
                        fontSize: '1.7rem',
                    }}>Appointment form </DialogTitle>
                    <DialogTitle sx={{
                        fontWeight: '700',
                        textTransform: 'uppercase',
                        color: '#16213e',
                        fontSize: '1rem',
                    }}> Request a quote </DialogTitle>
                    <DialogContent sx={{
                        overflow: 'hidden'
                    }} >
                        <Stack spacing={4} sx={{
                            width: '100%',
                            margin: 'auto',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            // flexDirection: { sm: 'column', md: 'row' }
                            // border: '1px solid red'
                        }} >
                            <Box sx={{
                                width: { xs: '100%', sm: '100%', md: '100%' },
                                // border: '1px solid green'
                            }} >
                                <Formik initialValues={initialValue} validationSchema={validationSchema}
                                    onSubmit={(values, { setSubmitting }) => {
                                        handleSubmitForm(values)
                                        setSubmitting(false)
                                    }}
                                >{({ errors, touched, values, setFieldValue }) => {
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
                        </Stack >
                    </DialogContent>

                </ModalDialog>
            </Modal>
        </React.Fragment>
    );
}
