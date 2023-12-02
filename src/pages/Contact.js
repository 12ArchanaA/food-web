import React from "react";
import "../styles/Contact.css";
import Profile from "../assets/profile.jpg";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import EmailIcon from "@mui/icons-material/Email";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Contact = () => {
  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Name is required")
      .min(3,"Name should have atleast 3 characters")
      .max(40)
      .matches(/^[A-Za-z ]*$/, "Please enter valid name"),
    email: yup
      .string()
      .required("Email is required")
      .email("Invalid Email Format"),
    message: yup
      .string()
      .required("Please write a message.")
      .min(
        100,
        "This message is below the minimum word limit. Required word limit is 100-500"
      )
      .max(500, "You cannot exceed 500 words. Required word limit is 100-500"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="contact">
      <div
        className="contact-left-side"
        style={{ backgroundImage: `url(${Profile})` }}
      ></div>
      <div className="contact-right-side">
        <h2 className="contact-heading">Contact Us</h2>
        <div className="contact-details">
          <div className="phone">
            <p>
              <PhoneAndroidIcon sx={{ color: "#bd3e4e" }} />
            </p>
            <p> : 9876543210</p>
          </div>
          <div className="email">
            <p>
              <EmailIcon sx={{ color: "#bd3e4e" }} />
            </p>
            <p> : xyz@gmail.com</p>
          </div>
        </div>

        <form id="contact-form" method="POST" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name..."
            {...register("name")}
          />
          <p className="error-message">{errors.name?.message}</p>

          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            placeholder="abc@email.com"
            {...register("email")}
          />
          <p className="error-message">{errors.email?.message}</p>

          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" rows="6" placeholder="Talk to us..." {...register("message")} />
          <p className="error-message">{errors.message?.message}</p>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
