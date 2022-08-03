import { TextField } from "@mui/material";
import { FormikValues } from "formik";

const FormikInput = ({
  field,
  form: { touched, errors },
  label,
  type,
  inputRef,
  autoFocus,
  ...props
}: FormikValues) => (
  <>
    <TextField
      autoFocus={autoFocus}
      sx={{
        mb: 2,
        ":disabled": {
          cursor: "not-allowed",
        },
      }}
      fullWidth
      type={type || "text"}
      id={field.name}
      label={label}
      error={touched[field.name] && !!errors[field.name]}
      helperText={touched[field.name] && errors[field.name]}
      ref={inputRef}
      {...field}
      {...props}
    />
  </>
);

export default FormikInput;
