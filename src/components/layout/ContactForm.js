import React from "react";
import { Form, Button } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: ""
    },
    validationSchema: Yup.object({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      message: Yup.string().required()
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });
  const { handleSubmit, handleChange, values, touched, errors } = formik;
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            name="name"
            type="text"
            onChange={handleChange}
            value={values.name}
            isValid={touched.name && !errors.email}
            isInvalid={!!errors.name}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            values={values.email}
            onChange={handleChange}
            isValid={touched.email && !errors.email}
            isInvalid={!!errors.email}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Message</Form.Label>
          <Form.Control
            name="message"
            as="textarea"
            rows="3"
            onChange={handleChange}
            value={values.message}
            isValid={touched.message && !errors.message}
            isInvalid={!!errors.message}
          />
        </Form.Group>
        <Button type="submit" variant="primary" block>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ContactForm;
