import { FieldHookConfig, useField } from "formik";
import PhoneInput, { PhoneInputProps } from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
import "@assets/styles/components/PhoneInput.scss";
import ErrorText from "@components/text/ErrorText";

interface ExtraPhoneInputProps extends PhoneInputProps {
  defaultValue: string;
  disabled?: boolean;
}

const MobileInput = (props: ExtraPhoneInputProps & FieldHookConfig<any>) => {
  const [field, meta, helpers] = useField(props);
  const { placeholder, defaultValue, disabled } = props;
  const { touched, error } = meta;
  const { setValue } = helpers;

  const handleOnChange = (value: string) => {
    setValue(value);
  };

  return (
    <>
      <PhoneInput
        disabled={disabled}
        country={"np"}
        onlyCountries={["np"]}
        inputProps={{
          name: field.name,
          required: true,
        }}
        onChange={handleOnChange}
        countryCodeEditable={false}
        placeholder={placeholder}
        value={defaultValue}
        inputClass={touched && error ? "error" : "primary"}
      />
      {touched && error && (
        <ErrorText
          sx={{
            pl: 2,
          }}
        >
          {error}
        </ErrorText>
      )}
    </>
  );
};

export default MobileInput;
