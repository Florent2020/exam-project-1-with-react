import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import ValidationError from "../forms/ValidationError";
import { MINIMUM_FIRST_NAME_CHARACTERS, MINIMUM_LAST_NAME_CHARACTERS, MINIMUM_MESSAGE_VALUE, DEFAULT_VALUES } from "../../constants/contactFormElements";


const schema = yup.object().shape({

    first_name: yup
        .string()
        .required("Please enter your first name!")
        .min(MINIMUM_FIRST_NAME_CHARACTERS, `Your first name must be at least ${MINIMUM_FIRST_NAME_CHARACTERS} characters!`),
    last_name: yup
        .string()
        .required("Please enter your last name!")
        .min(MINIMUM_LAST_NAME_CHARACTERS, `Your last name must be at least ${MINIMUM_LAST_NAME_CHARACTERS} characters!`),
    email: yup
        .string()
        .required("Please enter an email address!")
        .email("Please enter a valid email address!"),
    message: yup
        .string()
        .required("Please enter your message!")
        .min(MINIMUM_MESSAGE_VALUE, `The message must be at least ${MINIMUM_MESSAGE_VALUE} characters!`),

});


function ContactForm() {

    const [submitted, setSubmitted] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    });

    function onSubmit(data) {
        console.log(data);

        setSubmitted(true);

        reset(DEFAULT_VALUES);
    }

    // console.log(errors);

    return (
        <>

            <Form onSubmit={handleSubmit(onSubmit)}>
            {submitted && <Alert variant="success">Your submit was successful!</Alert>}

                <Form.Group>
                    <Form.Control placeholder="First Name" {...register("first_name")} />
                    {errors.first_name && <ValidationError>{errors.first_name.message}</ValidationError>}
                </Form.Group>

                <Form.Group>
                    <Form.Control placeholder="Last Name" {...register("last_name")} />
                    {errors.last_name && <ValidationError>{errors.last_name.message}</ValidationError>}
                </Form.Group>

                <Form.Group>
                    <Form.Control placeholder="Email" {...register("email")} />
                    {errors.email && <ValidationError>{errors.email.message}</ValidationError>}
                </Form.Group>

                <Form.Group>
                    <Form.Control  placeholder="Message" {...register("message")}  as="textarea" rows={5} />
                    {errors.message && <ValidationError>{errors.message.message}</ValidationError>}
                </Form.Group>

                <Button variant="info" type="submit">
                    Send
                </Button>
            </Form>
        </>
    );
}

export default ContactForm;