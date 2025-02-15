import { Link } from "react-router-dom";
import useTicketStore from "../context/useTicketStore";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const Ticket = () => {
  const setStatus = useTicketStore((state) => state.setStatus);
  const { tickets, setTickets } = useTicketStore();
  const [filterStatus, setFilterStatus] = useState("ALL");

  console.log("Tickets:", tickets);

  const handleFilterChange = (e) => {
    setFilterStatus(e.target.value);
  };

  const filteredTickets =
    filterStatus === "ALL"
      ? tickets
      : tickets.filter((ticket) => ticket.status === filterStatus);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/tickets", {
          params: {
            status: filterStatus,
          }
        });
        
        console.log("Fetched Tickets:", response.data);
        setTickets(response.data);
      } catch (error) {
        console.error("Error fetching tickets:", error);
      }
    };

    fetchTickets();
  }, [filterStatus,setTickets]);

  const handleChange = async (e, ticketId) => {
    const newStatus = e.target.value;
    setStatus(ticketId, newStatus);

    try {
      const response = await axios.patch(
        "http://localhost:4000/api/tickets/status",
        {
          ticketId,
          newStatus,
        }
      );
      console.log("Ticket status updated:", response.data);
      setStatus(ticketId, newStatus);
    } catch (error) {
      console.error("Error updating ticket status:", error);
    }
  };

  

  return (
    <div className="flex h-screen">
      <div className="flex-1 bg-[#f8f5f1] p-6">
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold mb-6">Ticket Management</h1>
          <div className="justify-end flex">
            <select
              value={filterStatus}
              onChange={handleFilterChange}
              className="bg-[#214662] text-white p-2 rounded mr-5 ustify-center items-center flex h-11"
            >
              <option value="ALL">All</option>
              <option value="PENDING">Pending</option>
              <option value="ACCEPTED">Accepted</option>
              <option value="RESOLVED">Resolved</option>
              <option value="REJECTED">Rejected</option>
            </select>
            <Link
              to="/create-ticket"
              className="bg-[#7896ab] hover:bg-[#214662] text-white p-2 rounded mr-5 justify-center items-center flex w-32 h-11"
            >
              New Ticket
            </Link>
          </div>
        </div>

        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
          <table className="min-w-full table-auto">
            <thead className="bg-[#e1dfe1]">
              <tr>
                <th className="py-2 px-4 border-b">Ticket ID</th>
                <th className="py-2 px-4 border-b">Title</th>
                <th className="py-2 px-4 border-b">Description</th>
                <th className="py-2 px-4 border-b">Email</th>
                <th className="py-2 px-4 border-b">Status</th>
                <th className="py-2 px-4 border-b">Timestamps</th>
              </tr>
            </thead>
            <tbody>
              {tickets && tickets.length > 0 ? (
                tickets.map((ticket) => (
                  <tr key={ticket.id}>
                    <td className="py-2 px-4 border-b text-center">
                      #{ticket.id}
                    </td>
                    <td className="py-2 px-4 border-b text-center">
                      {ticket.title}
                    </td>
                    <td className="py-2 px-4 border-b text-center">
                      {ticket.description}
                    </td>
                    <td className="py-2 px-4 border-b text-center">
                      {ticket.contactInfo}
                    </td>
                    <td className="py-1 px-2 border-b text-center">
                      <select
                        value={ticket.status || "Pending"}
                        onChange={(e) => handleChange(e, ticket.id)}
                        className="bg-[#7896ab] text-white px-3 py-2 rounded cursor-pointer"
                      >
                        <option value="PENDING">Pending</option>
                        <option value="ACCEPTED">Accepted</option>
                        <option value="RESOLVED">Resolved</option>
                        <option value="REJECTED">Rejected</option>
                      </select>
                    </td>
                    <td className="py-2 px-4 border-b text-center">
                      {new Date(ticket.timestamps).toLocaleString()}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="5"
                    className="py-2 px-4 text-center text-gray-500"
                  >
                    No tickets available.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
