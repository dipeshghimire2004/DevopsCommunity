"use client";
import { SITE_CONTENT } from "../constants";

// interface ContactField {
//   name: string;
//   placeholder: string;
//   type: string;
// }

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white text-black">
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary text-center mb-10">
          {SITE_CONTENT.contact.title}
        </h2>
        <form className="space-y-6">
          {SITE_CONTENT.contact.fields.map((field) =>
            field.type === "textarea" ? (
              <textarea
                key={field.name}
                name={field.name}
                placeholder={field.placeholder}
                className="w-full p-3 border border-gray-300  text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
              />
            ) : (
              <input
                key={field.name}
                name={field.name}
                type={field.type}
                placeholder={field.placeholder}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
              />
            )
          )}
          <button
            type="submit"
            className="w-full bg-accent bg-black text-white p-3 rounded-lg hover:bg-green-600 transition-colors"
          >
            {SITE_CONTENT.contact.submitText}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
