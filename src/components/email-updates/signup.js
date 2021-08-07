import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import SignupField from "./signup-field";

const fields = {
  firstName: {
    name: "firstName",
    optional: false,
    description: "First Name",
    required: "First Name is required",
    invalid: "First Name is invalid",
    regex: /^[a-z ,.'-]+$/i,
  },
  lastName: {
    name: "lastName",
    optional: false,
    description: "Last Name",
    required: "Last Name is required",
    invalid: "Last Name is invalid",
    regex: /^[a-z ,.'-]+$/i,
  },
  email: {
    name: "email",
    optional: false,
    description: "Email Address",
    required: "Email Address is required",
    invalid: "Email Address is invalid",
    regex: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
  },
  organization: {
    name: "organization",
    optional: true,
    description: "Organization",
    invalid: "Organization is invalid",
    regex: /^[A-Z0-9._%+-]*$/i,
  },
  euResident: {
    name: "euResident",
    optional: false,
    description: "EU Resident",
    required: "Select an option",
  },
  comms: {
    name: "comms",
    optional: false,
    required: "Select at least one of the comms options",
  },
};

const validateFields = (values) => {
  const errors = {};
  Object.entries(fields).forEach(([key, field]) => {
    if (!field.optional && (!values[key] || values[key].length === 0)) {
      errors[key] = field.required;
    } else if (field.regex && !field.regex.test(values[key])) {
      errors[key] = field.invalid;
    }
  });
  console.log(errors);
  return errors;
};

const SignupEmailUpdates = () => {
  return (
    <div>
      <h1>Sign up for email updates</h1>
      <h4>*Indicates Required Field</h4>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          organization: "",
          euResident: "",
          comms: [],
        }}
        validate={validateFields}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
        render={({ errors, status, touched }) => (
          <Form>
            <div className="form-group">
              <SignupField field={fields.firstName} errors={errors} touched={touched}></SignupField>
            </div>
            <div className="form-group">
              <SignupField field={fields.lastName} errors={errors} touched={touched}></SignupField>
            </div>
            <div className="form-group">
              <SignupField field={fields.email} errors={errors} touched={touched}></SignupField>
            </div>
            <div className="form-group">
              <SignupField field={fields.organization} errors={errors} touched={touched}></SignupField>
            </div>

            <div className="form-group">
              <label htmlFor={fields.euResident.name}>{fields.euResident.description}*</label>
              <Field
                as="select"
                id={fields.euResident.name}
                name={fields.euResident.name}
                className={
                  "form-control" +
                  (errors[fields.euResident.name] && touched[fields.euResident.name] ? " is-invalid" : "")
                }
              >
                <option value="" label="- Select One -" />
                <option value="yes" label="Yes" />
                <option value="no" label="No" />
              </Field>
              <ErrorMessage name={fields.euResident.name} component="div" className="invalid-feedback" />
            </div>

            <div className="form-group">
              <div role="group" aria-labelledby="checkbox-group">
                <div>
                  <label>
                    <Field type="checkbox" name={fields.comms.name} value="advances" />
                    Advances
                  </label>
                </div>
                <div>
                  <label>
                    <Field type="checkbox" name={fields.comms.name} value="alerts" />
                    Alerts
                  </label>
                </div>
                <div>
                  <label>
                    <Field type="checkbox" name={fields.comms.name} value="other" />
                    Other communications
                  </label>
                </div>
              </div>
              <ErrorMessage
                name={fields.comms.name}
                component="div"
                className="invalid-feedback"
                style={{ display: "block" }}
              />
            </div>

            <button type="submit">Submit</button>
          </Form>
        )}
      ></Formik>
    </div>
  );
};

export default SignupEmailUpdates;
