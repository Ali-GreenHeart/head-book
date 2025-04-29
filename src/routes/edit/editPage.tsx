import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Helmet } from "react-helmet-async";
import { editUserSchema } from '@/interface/edit'
// import { registerUser } from "@/api/auth";

const initialValues: editUserSchema = {
    name: "Metin",
    surname: "Abbaszade",
    username: "methiin",
    imageUrl: "https://media.istockphoto.com/id/911983386/photo/portrait-of-a-happy-little-girl-laughing-and-smiling.jpg?s=612x612&w=0&k=20&c=3lA0ouSyQQHow2ZutUM2zlIloVRKJ69i9ohA1WbCeBc=",
    email: "metinabbaszade@yahoo.com",
};

const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    surname: Yup.string().required("Surname is required"),
    username: Yup.string().required("Username is required"),
    imageUrl: Yup.string().url("Must be a valid URL").required("Image URL is required"),
    password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required")
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/,
            "Password must include uppercase, lowercase, number and special character"
        ),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords must match")
        .required("Confirm Password is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
});

export default function RegisterPage() {
    const handleSubmit = () => { }
    return (
        <>
            <Helmet>
                <title>Head-Book Edit - Show yourself!</title>
                <meta name="description" content="Register!" />
            </Helmet>
            <div className="flex mt-20 justify-center p-4">
                <Card className="w-full max-w-md shadow-md">
                    <CardContent className="p-6">
                        <h1 className="text-2xl font-bold mb-6 text-center">Edit Your Profile</h1>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                        >
                            <Form className="space-y-4">
                                {/* Name */}
                                <div>
                                    <Label htmlFor="name">Name</Label>
                                    <Field
                                        as={Input}
                                        name="name"
                                        type="text"
                                        placeholder="Enter your name"
                                    />
                                    <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
                                </div>

                                {/* Surname */}
                                <div>
                                    <Label htmlFor="surname">Surname</Label>
                                    <Field
                                        as={Input}
                                        name="surname"
                                        type="text"
                                        placeholder="Enter your surname"
                                    />
                                    <ErrorMessage name="surname" component="div" className="text-red-500 text-sm mt-1" />
                                </div>

                                {/* Username */}
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

                                {/* Image URL */}
                                <div>
                                    <Label htmlFor="imageUrl">Image URL</Label>
                                    <Field
                                        as={Input}
                                        name="imageUrl"
                                        type="text"
                                        placeholder="Enter your profile image URL"
                                    />
                                    <ErrorMessage name="imageUrl" component="div" className="text-red-500 text-sm mt-1" />
                                </div>

                                {/* Email */}
                                <div>
                                    <Label htmlFor="email">Email</Label>
                                    <Field
                                        as={Input}
                                        name="email"
                                        type="email"
                                        placeholder="Enter your email"
                                    />
                                    <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                                </div>
                                {/* Submit */}
                                <Button type="submit" className="w-full">
                                    Register
                                </Button>
                            </Form>
                        </Formik>
                    </CardContent>
                </Card>
            </div>
        </>
    );
}
