import {
    Button,
    FormControlLabel,
    Radio,
    RadioGroup,
    TextField,
} from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUserAction } from "../../Redux/auth/auth.action";
import { useNavigate } from "react-router-dom";

const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    gender: "",
};

// const validationSchema = {
//     email: Yup.string().email("Invalid email").required("Email is required"),
//     password: Yup.string()
//         .min(6, "Password must be at least 6 characters")
//         .required("Password is required"),
// };

const Register = () => {
    const [gender, setGender] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (values) => {
        values.gender = gender;
        console.log("handle submit", values);

        dispatch(registerUserAction({ data: values }));
    };

    const handleChange = (event) => {
        setGender(event.target.value);
    };

    return (
        <>
            <Formik
                onSubmit={handleSubmit}
                // validationSchema={validationSchema}
                initialValues={initialValues}
            >
                <Form className="space-y-5">
                    <div className="space-y-5">
                        <div>
                            <Field
                                as={TextField}
                                name="firstName"
                                placeholder="First Name"
                                type="text"
                                variant="outlined"
                                fullWidth
                            />
                            <ErrorMessage
                                name="firstName"
                                component="div"
                                className="text-red-500"
                            />
                        </div>
                        <div>
                            <Field
                                as={TextField}
                                name="lastName"
                                placeholder="Last Name"
                                type="lastName"
                                variant="outlined"
                                fullWidth
                            />
                            <ErrorMessage
                                name="lastName"
                                component="div"
                                className="text-red-500"
                            />
                        </div>
                        <div>
                            <Field
                                as={TextField}
                                name="email"
                                placeholder="Email"
                                type="email"
                                variant="outlined"
                                fullWidth
                            />
                            <ErrorMessage
                                name="email"
                                component="div"
                                className="text-red-500"
                            />
                        </div>
                        <div>
                            <Field
                                as={TextField}
                                name="password"
                                placeholder="Password"
                                type="password"
                                variant="outlined"
                                fullWidth
                            />
                            <ErrorMessage
                                name="password"
                                component="div"
                                className="text-red-500"
                            />
                        </div>

                        <div className="flex justify-around">
                            <RadioGroup
                                row
                                aria-label="gender"
                                name="gender"
                                onChange={handleChange}
                            >
                                <FormControlLabel
                                    value="male"
                                    name="gender"
                                    control={<Radio />}
                                    label="Male"
                                />
                                <FormControlLabel
                                    value="female"
                                    name="gender"
                                    control={<Radio />}
                                    label="Female"
                                />
                            </RadioGroup>
                        </div>
                    </div>
                    <Button
                        sx={{ padding: ".8rem 0rem" }}
                        fullWidth
                        type="submit"
                        variant="contained"
                        color="primary"
                    >
                        Register
                    </Button>
                </Form>
            </Formik>
            <div className="flex gap-2 items-center justify-center pt-5">
                <p>If you have already account ?</p>
                <Button onClick={() => navigate("/login")}>Login</Button>
            </div>
        </>
    );
};

export default Register;
