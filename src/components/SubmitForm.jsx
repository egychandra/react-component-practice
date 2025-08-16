import { useState } from "react"

const SubmitForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [entries, setEntries] = useState([]);
  const [errors, setErrors] = useState({ name: "", email: "" });

  const validate = () => {
    let valid = true;
    let newErrors = { name: "", email: "" };
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Name Validation
    if (!formData.name.trim()) {
      newErrors.name = "Name must not be empty";
      valid = false;
    } else if (formData.name.length > 15) {
      newErrors.name = "Name must not exceed 15 characters";
      valid = false;
    }

    // Email Validation
    if (!formData.email.trim()) {
      newErrors.email = "Email must not be empty";
      valid = false;
    } else if (!emailPattern.test(formData.email)) {
      newErrors.email = "Email must be a valid format";
      valid = false;
    } else if (entries.some(entry => entry.email.toLowerCase() === formData.email.toLowerCase())) {
      newErrors.email = "Email already exists";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  }

  const handleReset = () => {
    setFormData({ name: "", email: "" });
    setErrors({ name: "", email: "" });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setEntries([ ...entries, formData ]);
    handleReset();
  }

  return (
    <div className="w-md max-w-sm">
      <h1 className="text-2xl font-bold mb-4 text-center">Submit Form</h1>
      <form className="space-y-4" onSubmit={handleSubmit} noValidate>
        <div>
          <input
            className="border border-gray-300 px-3 py-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Enter your name..."
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>
        <div>
          <input
            className="border border-gray-300 px-3 py-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="email"
            placeholder="Enter your email..."
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>
        <div className="flex justify-end space-x-2">
          <button
            type="reset"
            className="bg-gray-500 text-white px-4 py-2 rounded cursor-pointer"
            onClick={handleReset}
          >
            Clear
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white rounded px-4 py-2 cursor-pointer"
          >
            Submit
          </button>
        </div>
      </form>
      {entries.length > 0 && (
        <table className="w-full mt-6 border-collapse">
          <thead>
            <tr>
              <th className="border border-gray-300">Name</th>
              <th className="border border-gray-300">Email</th>
            </tr>
          </thead>
          <tbody>
            {entries.map((entry, index) => (
              <tr key={index}>
                <td className="border border-gray-300 px-2">{entry.name}</td>
                <td className="border border-gray-300 px-2">{entry.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default SubmitForm;