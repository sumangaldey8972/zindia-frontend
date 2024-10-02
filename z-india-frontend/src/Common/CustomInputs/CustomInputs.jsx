import { FormControl, FormHelperText, FormLabel, Input, styled } from "@mui/joy";
import { useField } from "formik"

const InputField = styled(Input)(({ theme }) => ({
    borderRadius: '0',
    fontSize: '.8rem'
}))

export const MaterialInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (<FormControl>
        <InputField autoComplete="off" {...field} {...props} sx={{ borderRadius: '0' }} />
        {meta.touched && meta.error && (
            <FormHelperText sx={{ color: "red", fontSize: '.6rem' }}>
                {meta.error}
            </FormHelperText>
        )}
    </FormControl>)
}