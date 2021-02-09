import "./Login.css";
import React from "react";
import { useHistory } from "react-router-dom";
import { Formik } from "formik";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {
  logoutUser,
  requestUserToken,
  saveUserToken,
} from "../../services/account.service";
import { useDispatch } from "react-redux";
import { loginUserAction } from "../../redux/actions/user.action";
import { getUserByToken } from "../../services/user-data.service";
import {
  showLoadingAction,
  hideLoadingAction,
} from "../../redux/actions/common.action";

export default function Login() {
  const routeHistory = useHistory();
  const dispatch = useDispatch();

  function login(values, { setSubmitting }) {
    const request = {
      username: values.email,
      password: values.password,
    };

    dispatch(showLoadingAction());
    requestUserToken(request).then(
      (response) => {
        saveUserToken(response.access_token);
        getUserByToken().then(
          (user) => {
            setSubmitting(false);
            dispatch(loginUserAction(user));
            dispatch(hideLoadingAction());
            routeHistory.push("/dashboard");
          },
          (error) => {
            setSubmitting(false);
            logoutUser();
            dispatch(hideLoadingAction());
          }
        );
      },
      (error) => {
        setSubmitting(false);
        dispatch(hideLoadingAction());
      }
    );
  }

  return (
    <div className="Login">
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Email is required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }

          if (!values.password) {
            errors.password = "Password is required";
          }
          return errors;
        }}
        onSubmit={login}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
          isSubmitting,
        }) => (
          <Form noValidate autoComplete="true" onSubmit={handleSubmit}>
            <Form.Group size="lg" controlId="email">
              <Form.Label> Email </Form.Label>
              <Form.Control
                autoFocus
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
                isInvalid={touched.email && !!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group size="lg" controlId="password">
              <Form.Label> Password </Form.Label>
              <Form.Control
                name="password"
                type="password"
                value={values.password}
                onChange={handleChange}
                isInvalid={touched.password && !!errors.password}
              />
              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            </Form.Group>
            <Button block size="lg" type="submit" disabled={isSubmitting}>
              Login
            </Button>
          </Form>
        )}
      </Formik>
      <br />
      <p> Forgot password ? </p>
    </div>
  );
}
