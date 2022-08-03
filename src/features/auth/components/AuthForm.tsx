import { Field, Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { useMemo, useState } from "react";
import { UIButton } from "@components/ui/Button";
import { Box } from "@mui/material";
import FormikInput from "@components/form/formik/FormikInput";
import MobileInput from "@components/form/formik/MobileInput";
import { CustomDialogPartialProps } from "@interfaces/dialog";
import useAuth from "@features/auth/hooks/useAuth";
import FlexBox from "@components/box/FlexBox";

const LoginSchemaObject = {
  phone: Yup.string()
    .min(13, "Mobile number is not valid")
    .required("Mobile number is required."),
};

const SignUpSchemaObject = {
  fullname: Yup.string()
    .required("Full name is required.")
    .min(4, "Name should be at least 4 characters."),
  email: Yup.string()
    .email("Email is not valid.")
    .required("Email is required."),
  password: Yup.string()
    .required("Password is required.")
    .min(8, "Password length should be at least 8 characters.")
    .matches(
      /[A-Z\W]/g,
      "Password should contain at least 1 uppercase letter."
    ),
  ...LoginSchemaObject,
};

const loginInitialValues = {
  phone: "",
  otp: "",
};

const signupInitialValues = {
  ...loginInitialValues,
  fullname: "",
  email: "",
  password: "",
};

interface AuthFormProps {
  isLogin: boolean;
  toggleIsLogin: () => void;
}

const AuthForm = ({
  toggleDialog,
  isLogin,
  toggleIsLogin,
}: AuthFormProps & CustomDialogPartialProps) => {
  const [otpStep, setOtpStep] = useState(false);
  const { loading, setLoading, setIsLoggedIn } = useAuth();
  const [initialData, setInitialData] = useState({
    initialValues: {},
    validationSchema: {},
    submitButtonText: "",
    linkText: "",
  });

  /* set initial values and schema according to isLogin prop */

  useMemo(() => {
    setInitialData({
      initialValues: isLogin ? loginInitialValues : signupInitialValues,
      validationSchema: Yup.object().shape(
        isLogin ? LoginSchemaObject : SignUpSchemaObject
      ),
      submitButtonText: isLogin ? "Login" : "Signup",
      linkText: isLogin ? "Create Account" : "Login Now",
    });
  }, [isLogin]);

  const handleLinkClick = (
    values: typeof initialData.initialValues,
    actions: FormikHelpers<any>
  ) => {
    toggleIsLogin();
    actions.setSubmitting(false);
  };

  // const handleLinkClick = (
  //  resetForm
  // ) => {
  //   toggleIsLogin();
  //   resetForm();
  // };

  const onSubmitForm = (form: typeof initialData.initialValues) => {
    setLoading(true);
    setTimeout(() => {
      if (!otpStep) {
        setOtpStep(true);
      } else {
        setIsLoggedIn();
        toggleDialog();
      }
      setLoading(false);
    }, 2000);
  };
  return (
    <>
      <Formik
        initialValues={initialData.initialValues}
        validateOnChange
        validationSchema={initialData.validationSchema}
        onSubmit={onSubmitForm}
        onReset={handleLinkClick}
      >
        {(
          { resetForm } // formik helpers props
        ) => (
          <Form>
            <Box
              sx={{
                py: 2,
              }}
            >
              {!otpStep ? (
                <>
                  {!isLogin && (
                    <>
                      <Field
                        disabled={loading}
                        name="fullname"
                        type="text"
                        label="Fullname"
                        placeholder="full name"
                        component={FormikInput}
                      />
                      <Field
                        disabled={loading}
                        name="email"
                        type="email"
                        label="Email"
                        placeholder="Email"
                        component={FormikInput}
                      />
                      <Field
                        disabled={loading}
                        name="password"
                        type="password"
                        label="Password"
                        placeholder="********"
                        component={FormikInput}
                      />
                    </>
                  )}
                  <MobileInput
                    disabled={loading}
                    name="phone"
                    type="text"
                    placeholder="1234567890"
                    defaultValue={""}
                  />
                </>
              ) : (
                <Field
                  autoFocus
                  disabled={loading}
                  name="otp"
                  type="text"
                  label="OTP Code"
                  placeholder="****"
                  component={FormikInput}
                />
              )}
            </Box>
            <UIButton fullWidth as="loading" loading={loading}>
              {initialData.submitButtonText}
            </UIButton>
            <FlexBox flexDirection={"column"}>
              or
              {/* <UIButton link onClick={handleLinkClick.bind(null, resetForm)}>
                {initialData.linkText}
              </UIButton> */}
              <UIButton link type="reset">
                {initialData.linkText}
              </UIButton>
            </FlexBox>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default AuthForm;
