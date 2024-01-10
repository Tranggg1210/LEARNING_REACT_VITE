import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
const Login = () => {
    return (
        <div className='loginVite'>
            <div className="itemCenter">
                <h1>Login</h1>
                <div className="formLogin">
                    <Formik
                        initialValues={{
                            Email: "",
                            Password: ""
                        }}
                        validationSchema={
                            Yup.object({
                                Email: Yup.string()
                                    .required("Email is empty!")
                                    .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Not an email!"),

                                Password: Yup.string()
                                    .required("Password is empty!")
                            })
                        }
                        onSubmit={(value) => {
                        }}

                    >
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            isSubmitting,
                            /* and other goodies */
                        }) => (
                            <Form action="">
                                <div className="itemGroup">
                                    <label htmlFor="Email">Email</label> <br />
                                    <div>
                                        <i className="fa-regular fa-user"></i>
                                        <Field type="email" name="Email" placeholder="Type your username" autocomplete="current-email" />
                                    </div>
                                    <hr />
                                    <ErrorMessage className='ErrorMessage' name="Email" component="div"></ErrorMessage>
                                </div>
                                <div className="itemGroup">
                                    <label htmlFor="Password">Password</label> <br />
                                    <div>
                                        <i className="fa-solid fa-lock"></i>
                                        <Field type="password" name="Password" placeholder="Type your password" autocomplete="current-password" />
                                    </div>
                                    <hr />
                                    <ErrorMessage className='ErrorMessage' name="Password" component="div"></ErrorMessage>
                                    <div><a href="">Forgot password?</a></div>
                                </div> <br />
                                <button type="">LOGIN</button>
                            </Form>)}
                    </Formik>
                </div>
                <div className="other">
                    <div>Or Sign Up Using</div> <br />
                    <div>
                        <div className="borderItem"><i className="fa-brands fa-facebook-f"></i></div>
                        <div className="borderItem"><i className="fa-brands fa-twitter"></i></div>
                        <div className="borderItem"><i className="fa-brands fa-google"></i></div>
                    </div>
                </div> <br />
                <div className="singup">
                    <div>Or Sign Up Using</div> <br />
                    <div><a href="">SIGN UP</a></div>
                </div>
                <br /><br />
            </div>
        </div>

    );
};

export default Login;