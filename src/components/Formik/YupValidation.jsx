import * as yup from "yup";

const YupValidation = yup.object({
  name: yup.string().required("Name is Required!"),
  password: yup
    .string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    )
    .required("Password is Required!"),
  gender: yup.string().required("Gender is Required!"),
  email: yup.string().required(" is Required!"),
  date: yup.date().required("Date of Birth is required"),
  income: yup.string().required("Required"),
  about: yup
    .string()
    .min(5, "too small!")
    .max(500, "Too Long String")
    .required("Required"),
  social: yup
    .array()
    .of(
      yup
        .string("String is Required!")
        .min(4, "Too Short")
        .max(20, "Too Long")
        .required("Required")
    )
    .min(1, "Atleast One Social Media is Required!")
    .required("Required"),

});

export default YupValidation;
