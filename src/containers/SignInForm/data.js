import * as yup from "yup";

export const Schema = yup.object({
    firstName: yup.string().min(2, "First name must be at least 2 characters").required("First name is required"),
    lastName: yup.string().min(2, "Last name must be at least 2 characters").required("Last name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], "Passwords must match").required("Confirm password is required"),
  });