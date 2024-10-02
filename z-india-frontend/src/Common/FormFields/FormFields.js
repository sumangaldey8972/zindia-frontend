import * as Yup from "yup"


export const initialValue = {
    first_name: '',
    last_name: '',
    email_address: '',
    phone_number: '',
    message: '',
}

export const formFields = [
    {
        type: "text", lavel: "", placeholder: 'First Name (required)', name: 'first_name'
    },
    {
        type: "text", lavel: "", placeholder: 'Last Name (required)', name: 'last_name'
    },
    {
        type: "email", lavel: "", placeholder: 'Email (required)', name: 'email_address'
    },
    {
        type: "number", lavel: "", placeholder: 'Phone Number (required)', name: 'phone_number'
    },
    {
        type: "text", lavel: "", placeholder: 'Leave us message', name: 'message'
    }
]

export const validationSchema = Yup.object({
    first_name: Yup.string().required('Enter your first name'),
    last_name: Yup.string().required("Enter your last name"),
    email_address: Yup.string().required("Enter your email"),
    phone_number: Yup.string().required("Enter your phone number"),
    message: Yup.string(),
})