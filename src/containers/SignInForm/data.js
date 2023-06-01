import * as yup from "yup";

export const Schema = yup.object({
    firstName: yup.string().required("First name is required").min(2, "First name must be at least 2 characters"),
    lastName: yup.string().required("Last name is required").min(2, "Last name must be at least 2 characters"),
    email: yup.string().required("Email is required").email("Invalid email"),
    password: yup.string().required("Password is required").min(6, "Password must be at least 6 characters"),
    confirmPassword: yup.string().required("Confirm password is required").oneOf([yup.ref('password'), null], "Passwords must match"),
  });