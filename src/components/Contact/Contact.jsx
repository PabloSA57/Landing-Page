import {useState} from "react";
import Button from "../ui/Button/Button";
import Input from "../ui/Input/Input";
import style from "./style.module.css";

function validateEmail(email) {
  var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}

const Contact = () => {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.length === 0) return setError({msg: "Email is required"});

    if (!validateEmail(email))
      return setError({msg: "Whoops, make sure it's an email"});

    setError(null);
  };

  const handleChangeEmail = (value) => {
    error && !validateEmail(value)
      ? setError({msg: "Whoops, make sure it's an email"})
      : setError(null);

    setEmail(value);
  };

  return (
    <section className={style.contact} id="Contact">
      <h5>35,000+ already joined</h5>
      <h3>Stay up-to-date with what we’re doing</h3>

      <form onSubmit={handleSubmit} className={style.form}>
        <Input
          onChange={handleChangeEmail}
          placeholder="Enter your email address"
          type="text"
          error={error}
        />
        <Button variant="secondary">Contact Us</Button>
      </form>
    </section>
  );
};

export default Contact;
