import { ChangeEvent, FormEvent, useRef, useState } from "react";
import axios from "axios";
import Button from "../Button";
import "./ContactForm.scss";

type FormState = {
  email: string;
  name: string;
  message: string;
};

type ServiceMessage = {
  text: string;
};

export default function ContactForm() {
  const formId = "vflkGnEh";
  const formSparkUrl = `https://submit-form.com/${formId}`;

  const initialFormState = {
    email: "",
    name: "",
    message: "",
  };

  const [formState, setFormState] = useState<FormState>(initialFormState);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [message, setMessage] = useState<ServiceMessage>();

  async function handleSubmit(event: FormEvent):Promise<void> {
    event.preventDefault();
    setSubmitting(true);
    await postSubmission();
    setSubmitting(false);
  }

  const postSubmission = async () => {
    const payload = {
      ...formState,
    };

    try {
      const result = await axios.post(formSparkUrl, payload);
      console.log(result);
      setMessage({
        text: "Thanks, I will be in touch shortly.",
      });
      setFormState(initialFormState);
    } catch (error) {
      console.log(error);
      setMessage({
        text: "Sorry, there was a problem. Please try again later.",
      });
    }
  };

  const updateFormControl = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = event.target;
    const key = id as keyof FormState;
    const updatedFormState = { ...formState };
    updatedFormState[key] = value;
    setFormState(updatedFormState);
  };

  return (
    <div className="MainContact">
      <div>
        <h1>Contact me</h1>
      </div>
      {message && ( 
      <div className="ServiceMessage">
          {message.text}
      </div>)}

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          onChange={updateFormControl}
          type="text"
          id="name"
          value={formState?.name}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          onChange={updateFormControl}
          type="email"
          id="email"
          value={formState?.email}
          required
        />

        <label htmlFor="message">Message</label>
        <textarea
          onChange={updateFormControl}
          id="message"
          value={formState?.message}
          required
          rows={5}
        ></textarea>

        <Button type="submit" disabled={submitting}>
          {submitting ? "Submitting..." : "Submit"}
        </Button>
      </form>
    </div>
  );
}
