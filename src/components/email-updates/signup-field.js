import React from "react";
import { Field, ErrorMessage } from "formik";

const label = (field) => {
  return `${field.description}${!field.optional ? "*" : ""}`;
};

const SignupField = ({ field, errors, touched }) => {
  return (
    <div className="form-group">
      <label htmlFor={field.name}>{label(field)}</label>
      <Field
        id={field.name}
        name={field.name}
        className={"form-control" + (errors[field.name] && touched[field.name] ? " is-invalid" : "")}
      />
      <ErrorMessage name={field.name} component="div" className="invalid-feedback" />
    </div>
  );
};

export default SignupField;
