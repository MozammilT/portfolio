import { useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "@/components/Alert";
import { Particles } from "@/components/particles";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("");
  const [alertMessage, setAlertMessage] = useState("false");
  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.send(
        "service_kt1b8w4",
        "template_gxur9gv",
        {
          from_name: formData.name,
          to_name: "Mozammil",
          from_email: formData.email,
          to_email: "mozammiltarique007@gmail.com",
          message: formData.message,
        },
        "IkxddumftTCbpwufk"
      );
      showAlertMessage("success", "Your message has been sent");
      console.log("form submitted", formData);
    } catch (err) {
      console.log(err);
      showAlertMessage("danger", "Oops something went wrong!");
    } finally {
      setLoading(false);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }
  };
  return (
    <section className="relative flex items-center c-space section-spacing">
      <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color={"#fff"}
        refresh
      />
      {showAlert && (
        <Alert type={alertType} text={alertMessage} show={showAlert} />
      )}
      <div className="flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary">
        <div className="flex flex-col items-start w-full gap-5 mb-10">
          <h2 className="text-heading">Let&apos;s talk</h2>
          <p className="font-normal text-neutral-400">
            Whether you're loking to build a new website, improve your existing
            platform, or bring a unique project to life, I'm here to help
          </p>
        </div>
        <form className="w-full">
          <div className="mb-5">
            <label htmlFor="name" className="field-label section-spacing">
              Full Name
            </label>
            <input
              required
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              value={formData.name}
              placeholder="Jon Doe"
              className="field-input field-input-focus"
              onChange={handleChange}
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="field-label">
              Email
            </label>
            <input
              required
              id="email"
              type="email"
              name="email"
              autoComplete="email"
              value={formData.email}
              placeholder="JonDoe@email.com"
              className="field-input field-input-focus"
              onChange={handleChange}
            />
          </div>
          <div className="mb-5">
            <label htmlFor="message" className="field-label">
              Message
            </label>
            <textarea
              rows="4"
              required
              type="text"
              id="message"
              name="message"
              value={formData.message}
              placeholder="Share your thoughts..."
              className="field-input field-input-focus"
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            onClick={handleSubmit}
            className={`w-full px-1 py-3 text-lg text-center rounded-md bg-radial from-lavender to-royal hover-animation ${
              loading ? "cursor-not-allowed" : "cursor-pointer"
            }`}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
