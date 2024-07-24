import React from "react";

export const Contact = () => {
  return (
    <section className="py-36">
      <h2 className="text-3xl font-bold text-center mb-12">
        Feel free to contact us
      </h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.200028865791!2d72.97289347500598!3d19.18646374849582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b8df51719ccf%3A0x3b3afba7961341f8!2sThane!5e0!3m2!1sen!2sin!4v1701238644270!5m2!1sen!2sin"
        width="100%"
        height="500"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="container mx-auto mt-24 text-center">
        <div className="max-w-2xl mx-auto">
          <form
            action="https://formspree.io/f/moqoonbb"
            method="POST"
            className="space-y-6"
          >
            <input
              type="text"
              name="username"
              placeholder="Username"
              autoComplete="off"
              required
              className="w-full p-3 border border-gray-300 rounded-md"
            />
            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
              className="w-full p-3 border border-gray-300 rounded-md"
            />
            <input
              type="text"
              name="mobile"
              placeholder="Mobile Number"
              autoComplete="off"
              required
              className="w-full p-3 border border-gray-300 rounded-md"
            />
            <textarea
              name="message"
              cols="30"
              rows="6"
              placeholder="Write your query here"
              autoComplete="off"
              required
              className="w-full p-3 border border-gray-300 rounded-md"
            ></textarea>
            <input
              type="submit"
              value="Send"
              className="w-full p-3 bg-blue-600 text-white rounded-md cursor-pointer transition-all duration-200 hover:bg-white hover:border hover:border-blue-600 hover:text-blue-600 transform hover:scale-95"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
