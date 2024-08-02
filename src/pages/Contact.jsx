export default function Contact() {
    const handleChange = (e) => {
        let element = e.target;
        if (element.value === "") {
            document.getElementById("required").classList.remove("display-none");
        } else {
            element.style.border = "none";
        }
    };

    return (
        <div className={"contact"}>
            <h2>Contact</h2>
            <form id="contact-form" className={"needs-validation"} noValidate>
                <div className={"form-floating mb-3"}>
                    <input type="text" id="name" name={"name"} onBlur={handleChange} className={"form-control"} placeholder="Name" required/>
                    <label htmlFor="name">Name</label>
                </div>
                <div className={"form-floating mb-3"}>
                    <input type="email" id="email" name={"email"} onBlur={handleChange} className={"form-control"} placeholder="Email" required/>
                    <label htmlFor="email">Email</label>
                </div>
                <div className={"form-floating mb-3"}>
                    <textarea id="message" name={"message"} onBlur={handleChange} className={"form-control"} placeholder="Message" required style={{height: 100 + 'px'}}></textarea>
                    <label htmlFor="message">Message</label>
                </div>
                <p id={"name-required"} className={"display-none"}>Name is required</p>
                <p id={"invalid-email"} className={"display-none"}>email is invalid</p>
                <button type="submit" className={"btn btn-primary"}>Send</button>
            </form>
        </div>
    );
}