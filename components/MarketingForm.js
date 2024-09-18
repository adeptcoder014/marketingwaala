import React, { useState } from "react";

const MarketingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    company: "",
    budget: "",
    website: "",
    comments: "",
    interests: [],
  });

  const interestsOptions = [
    "Social Media Marketing",
    "Website Development",
    "Influencer Marketing",
    "Branding Solutions",
    "Search Engine Optimization",
    // "Content Writing",
    "Performance Marketing",
    // "Event Marketing",
    // "Video Production",
    "Consultancy",
    "Instagram Marketing",
    "Shopify Development",
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleInterestsChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      interests: checked
        ? [...prevState.interests, value]
        : prevState.interests.filter((interest) => interest !== value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className=" mx-auto my-6">
      <form
      id="contact-form"
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6"
      >
        <h2 className="text-xl font-bold mb-4">I'm Interested In</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {interestsOptions.map((interest, index) => (
            <label key={index} className="flex items-center space-x-2">
              <input
                type="checkbox"
                value={interest}
                onChange={handleInterestsChange}
                className="form-checkbox h-5 w-5"
              />
              <span>{interest}</span>
            </label>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            onChange={handleChange}
            className="border p-2 rounded-lg w-full"
          />
          <input
            type="text"
            name="mobile"
            placeholder="Enter Your Mobile Number"
            onChange={handleChange}
            className="border p-2 rounded-lg w-full"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            onChange={handleChange}
            className="border p-2 rounded-lg w-full"
          />
          <input
            type="text"
            name="company"
            placeholder="Enter Your Company Name"
            onChange={handleChange}
            className="border p-2 rounded-lg w-full"
          />
        </div>

        <div className="mt-4">
          <label className="block mb-2">
            Average Monthly Marketing Budget 
          </label>
          <select
            name="budget"
            onChange={handleChange}
            className="border p-2 rounded-lg w-full"
          >
            <option value="" disabled selected>
              Select your budget
            </option>
            <option value="Under 50,000">Under 50,000</option>
            <option value="50,000 - 1,00,000">50,000 - 1,00,000</option>
            <option value="Above 1,00,000">Above 1,00,000</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <input
            type="url"
            name="website"
            placeholder="Enter Your Website URL"
            onChange={handleChange}
            className="border p-2 rounded-lg w-full"
          />
          <textarea
            name="comments"
            placeholder="Comments"
            onChange={handleChange}
            className="border p-2 rounded-lg w-full"
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="mt-6 m-auto bg-orange-500 text-white py-2 px-4 rounded-lg w-max  hover:bg-orange-600"
          >
            SUBMIT DETAILS NOW
          </button>
        </div>
      </form>
    </div>
  );
};

export default MarketingForm;
