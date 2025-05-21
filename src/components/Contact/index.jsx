import "./Contact.css";
import Pyramid from "../../ui/Pyramid";
import { contactInfo } from "../../data";
import SocialHandles from "../../ui/SocialHandles";
import { BsFillSendFill } from "react-icons/bs";
import { useState, useEffect } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://formspree.io/f/xnndwkpl", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setIsSuccess(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message.");
        setIsSuccess(false);
      }
    } catch (err) {
      console.error(err);
      setStatus("Something went wrong!");
      setIsSuccess(false);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => {
        setStatus(null);
        setIsSuccess(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isSuccess]);

  return (
    <section id="contact">
      <div className="section__wrapper">
        <div className="pyramid__container">
          <Pyramid />
        </div>
        <div className="flex contact__group">
          <div>
            <h3 className="title">
              Let's talk on your <span className="shine">greate project</span>{" "}
              together
            </h3>
            <div className="flex contact__options">
              {contactInfo.map((contact, index) => (
                <article className="flex option" key={index}>
                  <div className="contact__icon">
                    <img src={contact.icon} alt="" />
                  </div>
                  <div className="flex contact__content">
                    <div>
                      <h3 className="name">{contact.name}</h3>
                      <p className="text__muted line__clamp__1 value">
                        {contact.value}
                      </p>
                    </div>
                    <a
                      href={contact.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex__center btn"
                    >
                      <span className="btn__shine text">Message</span>
                      <div
                        className="flex__center icon"
                        style={{ background: contact.color }}
                      >
                        {contact.btnIcon}
                      </div>
                    </a>
                  </div>
                </article>
              ))}
            </div>
            <SocialHandles />
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your full name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
            />

            <input
              type="email"
              placeholder="Your email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
            />

            <textarea
              name="message"
              rows={7}
              placeholder="Your message"
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>

            <button type="submit" className="btn flex__center submit__btn">
              <div className="icon">
                <BsFillSendFill />
              </div>
              <span>Send Now</span>
            </button>

            {status && (
              <p className={`form-status ${isSuccess ? "fade-out" : ""}`}>
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
