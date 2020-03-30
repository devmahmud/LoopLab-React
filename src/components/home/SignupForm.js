import React from "react";
import { Card, Form, Button } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      password2: ""
    },
    validationSchema: Yup.object({
      username: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string()
        .min(6)
        .required(),
      password2: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required()
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  const { handleSubmit, handleChange, values, touched, errors } = formik;
  return (
    <Card bg="primary" className="text-center">
      <Card.Body>
        <h3>Sign Up Today</h3>
        <p>Please fill out this form to register</p>
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Control
              type="text"
              name="username"
              value={values.username}
              onChange={handleChange}
              isValid={touched.username && !errors.username}
              isInvalid={!!errors.username}
              placeholder="Username"
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="email"
              name="email"
              placeholder="Email"
              value={values.email}
              onChange={handleChange}
              isValid={touched.email && !errors.email}
              isInvalid={!!errors.email}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
              isValid={touched.password && !errors.password}
              isInvalid={!!errors.password}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              name="password2"
              value={values.password2}
              onChange={handleChange}
              isValid={touched.password2 && !errors.password2}
              isInvalid={!!errors.password2}
            />
          </Form.Group>
          <Button type="submit" variant="outline-light" block>
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default SignupForm;
