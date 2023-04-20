import { useState } from "react";
import ContactPhoto from "../assets/AppFiles/ContactPhoto.svg";
// import axios from "axios";

export default function Contact() {
  const [contact, setContact] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setContact({
      email: "",
      subject: "",
      message: "",
    });
  }
  //   axios
  //     .post("http://localhost:3000/", {
  //       email: contact.email,
  //       subject: contact.subject,
  //       message: contact.message,
  //     })
  //     .then((response) => {
  //       console.log(response.data);
  //       alert("Mail has been sent Successfully.");
  //     })
  //     .catch((error) => {
  //       alert("Error !" + error);
  //     });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!contact.email || !contact.subject || !contact.message) {
      alert("Please fill in all the required fields.");
      return;
    }
    handleSubmit(e);
  };

  return (
    <section
      id="contact"
      className="md:px-48 px-4   md:py-24 py-10 h-full w-full font-poppins">
      <div className="flex md:flex-row flex-col md:justify-between gap-4">
        <div className="w-full max-w-sm p-4 bg-white border border-gray-200 md:mx-0 mx-auto  rounded-lg shadow sm:p-6 md:p-8">
          <form className="space-y-6">
            <h5 className="text-xl  font-medium text-gray-900">Let's Talk !</h5>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                value={contact.email}
                onChange={(e) =>
                  setContact({ ...contact, email: e.target.value })
                }
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5   focus:border-slate-500 focus:outline-none"
                placeholder="name@company.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-gray-900">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={contact.subject}
                onChange={(e) =>
                  setContact({ ...contact, subject: e.target.value })
                }
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-slate-500 focus:outline-none block w-full p-2.5"
                placeholder="Let me know, how I can help You."
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 ">
                Your Message
              </label>
              <textarea
                name="message"
                rows={4}
                value={contact.message}
                onChange={(e) =>
                  setContact({ ...contact, message: e.target.value })
                }
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:border-slate-500 focus:outline-none"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              onClick={handleFormSubmit}
              className="text-white bg-black w-full  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">
              Send message
            </button>
          </form>
        </div>
        {/* Right / Button Side */}
        <div className=" flex flex-col justify-around  ">
          <h1 className=" md:text-4xl  text-xl md:mx-0 mx-auto ">
            Contact Me...
          </h1>
          <p className=" md:max-w-[500px] max-w-[300px] md:py-8 py-4 md:text-left text-center mx-auto">
            I'm always excited to hear about new Project or Job Opportunities,
            so don't hesitate to reach out! Whether you have a Question or Just
            want to chat, Use the form to send me a message. I'll get back to
            you as soon as possible - Let's Make Something Great Together!
          </p>

          <img
            src={ContactPhoto}
            alt="HeroPhoto"
            className="w-96 h-auto mx-auto "
          />
        </div>
      </div>
    </section>
  );
}
