import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AuthContext } from "@/context/AuthContext";
import { LoginFormValues } from "@/interface/auth";
import { IBackendErrorMessage } from "@/interface/utils";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router";
import * as Yup from "yup";

const initialValues: LoginFormValues = {
    username: "",
    password: "",
};

const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required")
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/,
            "Password must include uppercase, lowercase, number and special character"
        )
});

export default function LoginPage() {
    const [err, setErr] = useState<IBackendErrorMessage>()
    const { logInFunction } = useContext(AuthContext)
    const handleSubmit = async (values: LoginFormValues) => {
        console.log("Form values:", values);
        try {
            logInFunction(values)
        } catch (_err: any) {
            setErr(_err)
        }
    };

    return (
        <>
            <Helmet>
                <title>Head-Book Login - Show yourself!</title>
                <meta name="description" content="Login!" />
            </Helmet>
            <div className="flex min-h-screen items-center justify-center p-4">
                <Card className="w-full max-w-md shadow-md">
                    <CardContent className="p-6">
                        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                        >
                            <Form className="space-y-4">
                                <div>
                                    <Label htmlFor="username">Username</Label>
                                    <Field
                                        as={Input}
                                        name="username"
                                        type="text"
                                        placeholder="Enter your username"
                                    />
                                    <ErrorMessage name="username" component="div" className="text-red-500 text-sm mt-1" />
                                </div>
                                <div>
                                    <Label htmlFor="password">Password</Label>
                                    <Field
                                        as={Input}
                                        name="password"
                                        type="password"
                                        placeholder="Enter your password"
                                    />
                                    <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
                                </div>
                                {
                                    err?.message &&
                                    <p className="text-red-500 text-sm my-1" >{err?.message}</p>
                                }
                                <Button type="submit" className="w-full">
                                    Login
                                </Button>
                                <Link to="/register" className={buttonVariants({ variant: "link" })} >New? Register!</Link>
                            </Form>
                        </Formik>
                    </CardContent>
                </Card>
            </div>
        </>
    );
}
