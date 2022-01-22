import { Field, Form, Formik, ErrorMessage } from "formik"
import React from "react"
import * as Yup from "yup";


// const SignupSchema = Yup.object().shape({
//     full_name: Yup.string()
//         .min(8, 'Too Short!')
//         .max(15, 'Too Long!')
//         .required('Required'),
//     email_com: Yup.string()
//         .email('Invalid email')
//         .required('Required'),
// });


// const validate = values => {
//     const errors = {};
//     if (!values.full_name) {
//         errors.full_name = 'Required';
//     } else if (values.full_name.length > 15) {
//         errors.full_name = 'Must be 15 characters or less';
//     }

//     if (!values.email_com) {
//         errors.email_com = 'Required';
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email_com)) {
//         errors.email_com = 'Invalid email address';
//     }

//     return errors;
// };

export class FormContent extends React.Component {

    initialValues = { email_com: '', full_name: '', image: '' }
    // SignupSchema = Yup.object().shape({
    //         full_name: Yup.string()
    //             .min(8, 'Too Short!')
    //             .max(15, 'Too Long!')
    //             .required('Required'),
    //         email_com: Yup.string()
    //             .email('Invalid email')
    //             .required('Required'),
    //     });

    validate(values){
        const errors = {};
        if (!values.full_name) {
            errors.full_name = 'Required';
        } else if (values.full_name.length > 15) {
            errors.full_name = 'Must be 15 characters or less';
        }
    
        if (!values.email_com) {
            errors.email_com = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email_com)) {
            errors.email_com = 'Invalid email address';
        }
    
        return errors;
    };

    handleSubmit(values, actions) {

        console.log(values);
        // console.log(actions);
        actions.resetForm()
    }

    render() {
        return (
            <React.Fragment>
                <h1>Formik</h1>
                <Formik
                    initialValues={this.initialValues}
                    onSubmit={this.handleSubmit}
                    // validationSchema={SignupSchema}
                    validate={this.validate}
                >
                    {(formik) => {
                        console.log(formik);

                        return <Form>
                            <Field name="full_name" />
                            <ErrorMessage name="full_name" component={"span"} className="errorColor" />
                            <br />
                            <Field type="email" name="email_com" />
                            {/* <ErrorMessage name="email_com" component={"span"} className="errorColor" /> */}
                            {formik.errors.email_com ? <div>{formik.errors.email_com}</div>: null}
                            <br />
                            <input type="file" onChange={(e) => formik.setFieldValue("image", e.target.files[0])} />

                            <button type="submit">Send</button>
                        </Form>
                    }}

                </Formik>
            </React.Fragment>
        )
    }

}