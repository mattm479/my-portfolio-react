import {useState} from "react";

export default function Contact() {
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [messageError, setMessageError] = useState(false);
    const [invalidEmailError, setInvalidEmailError] = useState(false);

    const handleChange = (e) => {
        let element = e.target;

        if (element.name === "name") {
            const isValidName = validateElement(element.value);
            if (!isValidName) setNameError(true);
            else setNameError(false);
        } else if (element.name === "email") {
            const isEmail = validateElement(element.value);
            if (!isEmail) setEmailError(true);
            else {
                setEmailError(false);
                const isValidEmail = validateEmail(element.value);
                if (!isValidEmail) setInvalidEmailError(true);
                else setInvalidEmailError(false);
            }
        } else {
            const isValidMessage = validateElement(element.value);
            if (!isValidMessage) setMessageError(true);
            else setMessageError(false);
        }
    };

    const validateElement = (value) => {
        return value.length;
    }

    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };

    return (
        <div className={"contact"}>
            <h2>Contact</h2>
            <form id="contact-form" className={"needs-validation"} noValidate>
                <div className={"form-floating mb-3"}>
                    <input type="text" id="name" name={"name"} onBlur={handleChange} className={"form-control"}
                           placeholder="Name" required/>
                    <label htmlFor="name">Name</label>
                </div>
                <div className={"form-floating mb-3"}>
                    <input type="email" id="email" name={"email"} onBlur={handleChange} className={"form-control"}
                           placeholder="Email" required/>
                    <label htmlFor="email">Email</label>
                </div>
                <div className={"form-floating mb-3"}>
                    <textarea id="message" name={"message"} onBlur={handleChange} className={"form-control"}
                              placeholder="Message" required style={{height: 100 + 'px'}}></textarea>
                    <label htmlFor="message">Message</label>
                </div>
                {nameError && (<p>Name is required</p>)}
                {emailError && (<p>Email is required</p>)}
                {messageError && (<p>Message is required</p>)}
                {invalidEmailError && (<p>Email is invalid</p>)}
                <button type="submit" className={"btn btn-primary"}>Send</button>
            </form>
        </div>
    );
}