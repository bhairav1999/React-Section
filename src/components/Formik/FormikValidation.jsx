import React from "react";
import { Formik, Form, Field } from "formik";
import YupValidation from "./YupValidation";
import ErrorPage from "./ErrorPage";
const FormikValidation = () => {
  console.log(YupValidation);
  const handlesubmit = (values) => {
    console.log(values);
  };
  return (
    <>
      <h2 className="text-center p-5 text-2xl font-bold">Form Validation</h2>
      <Formik
        onSubmit={handlesubmit}
        validationSchema={YupValidation}
        initialValues={{
          name: "",
          email: "",
          password: "",
          gender: "",
          date: "",
          income: "",
          about: "",
          social: [],
          // hobbies: [],
        }}
      >
        <Form className="max-w-md mx-auto my-4 p-4 bg-gray-100 border rounded-md">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <Field
              className="w-full px-3 py-2 border rounded-md"
              name="name"
              type="text"
              placeholder="Enter your name"
            />
            <ErrorPage name="name" />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <Field
              className="w-full px-3 py-2 border rounded-md"
              name="email"
              type="email"
              placeholder="Enter your email"
            />
            <ErrorPage name="email" />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <Field
              className="w-full px-3 py-2 border rounded-md"
              name="password"
              type="password"
              placeholder="Enter your password"
            />
            <ErrorPage name="password" />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Gender
            </label>
            <div className="flex items-center mb-2">
              <label className="mr-2" htmlFor="male">
                Male
              </label>
              <Field className="mr-1" name="gender" type="radio" value="male" />
            </div>
            <div className="flex items-center">
              <label className="mr-2" htmlFor="female">
                Female
              </label>
              <Field
                className="mr-1"
                name="gender"
                type="radio"
                value="female"
              />
            </div>
            <ErrorPage name="gender" />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Date
            </label>
            <Field
              className="w-full px-3 py-2 border rounded-md"
              name="date"
              type="date"
            />
            <ErrorPage name="date" />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              City
            </label>
            <Field
              className="w-full px-3 py-2 border rounded-md"
              name="income"
              as="select"
              placeholder="Enter your email"
            >
              <option value="mumbai">mumbai</option>
              <option value="pune">pune</option>
              <option value="solapur">solapur</option>
            </Field>
            <ErrorPage name="income" />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              About
            </label>
            <Field
              className="w-full px-3 py-2 border rounded-md"
              name="about"
              as="textarea"
              placeholder="Enter your Meesage"
            />
            <ErrorPage name="about" />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Social
            </label>
            <div className="flex items-center mb-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="male"
              >
                Whatsaap
              </label>
              <Field
                placeholder="Add Whatsaap Url"
                className="w-full px-3 py-2 border rounded-md"
                name="social[0]"
                type="text"
              />
            </div>
            <div className="flex items-center">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="female"
              >
                facebook
              </label>
              <Field
                className="w-full px-3 py-2 border rounded-md"
                name="social[1]"
                type="text"
                placeholder="Add Facebook Url"
              />
            </div>
            <ErrorPage name="social" />
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default FormikValidation;
