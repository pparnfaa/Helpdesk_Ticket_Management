import useTicketStore from "../context/useTicketStore";

const TicketStatusDropdown = (ticketId) => {
  const { tickets, setStatus } = useTicketStore();

  console.log("Ticket ID:", ticketId);
  const ticket = tickets.find((t) => t.id === ticketId);
  console.log("Ticket:", ticket);

  // เช็คว่ามี ticket ก่อน ถึงจะแสดง Dropdown
  if (!ticket) return <span>Loading...</span>;

  const handleChange = (e) => {
    const newStatus = e.target.value;
    setStatus(ticketId, newStatus); // อัปเดตสถานะตาม ticketId
  };

  return (
    <select
      value={ticket.status || "Pending"}
      onChange={handleChange}
      className="bg-[#7896ab] text-white px-3 py-2 rounded cursor-pointer"
    >
      <option value="PENDING">Pending</option>
      <option value="ACCEPTED">Accepted</option>
      <option value="RESOLVED">Resolved</option>
      <option value="REJECTED">Rejected</option>
    </select>
  );
};

export default TicketStatusDropdown;
