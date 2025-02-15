import useTicketStore from "../context/useTicketStore";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const CreateTicket = () => {
  const { formData, setFormData, setTimestamps, resetForm, addTicket } = useTicketStore();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(name, value);
  };

  // ฟังก์ชันที่ใช้เมื่อฟอร์มถูก submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setTimestamps((updatedFormData) => {
      console.log("Data to be sent:", updatedFormData);
      axios.post('http://localhost:4000/api/tickets', updatedFormData) 
       .then((response) => {
        console.log("Ticket Submitted:", response.data);
        addTicket(updatedFormData);
        resetForm();
        navigate("/");
      })
      .catch((error) => {
        console.error('Error submitting ticket:', error.response?.data || error.message);
      })
    });
  };

  return (
    <div className="justify-center flex h-screen bg-[#b4c4d0] items-center">
      <div className="max-w-4xl mx-auto p-6 bg-[#f8f5f1] shadow-md rounded-lg w-full">
        <h2 className="text-2xl font-bold text-center mb-6 text-black">
          Submit Support Ticket
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-black"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-black rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-black"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              className="mt-1 p-2 w-full border border-black rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="contact"
              className="block text-sm font-medium text-black"
            >
              Email
            </label>
            <input
              type="text"
              id="contactInfo"
              name="contactInfo"
              value={formData.contactInfo}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-black rounded-md"
              required
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-2 bg-[#7896ab] text-white font-semibold rounded-md hover:bg-[#214662] cursor-pointer"
            >
              Create Ticket
            </button>
          </div>
          <input
            type="hidden"
            name="timestamps"
            value={formData.timestamps || ""}
          />
        </form>
      </div>
    </div>
  );
};

export default CreateTicket;
