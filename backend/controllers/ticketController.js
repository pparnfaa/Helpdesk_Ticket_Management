const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createTicket = async (req, res) => {
  console.log("Request Body:", req.body);
  try {
    const { title, description, contactInfo, status, timestamps } = req.body;
    if (!title || !description || !contactInfo || !timestamps || !status) {
      return res.status(400).json({ error: "Missing required fields" });
    }
    console.log("Request Body:", req.body);

    const newTicket = await prisma.ticket.create({
      data: {
        title: title,
        description: description,
        contactInfo: contactInfo,
        status: status ? status : 'PENDING',
        timestamps: new Date(timestamps).toISOString(),
      },
    });

    console.log("New Ticket:", newTicket);

    res
      .status(201)
      .json({ message: "Ticket created successfully!", newTicket });
  } catch (error) {
    console.error("Error creating ticket:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getAllTickets = async (req, res) => {
  
  try {
    const { status, startDate, endDate } = req.query;
    const filters = {};

    if (status && ['PENDING', 'ACCEPTED', 'RESOLVED', 'REJECTED'].includes(status)) {
      filters.status = status;
    }

    if (startDate && endDate) {
      filters.timestamps = {
        gte: new Date(startDate), 
        lte: new Date(endDate),  
      };
    }

    const tickets = await prisma.ticket.findMany({
      where: filters,
    });
    res.status(200).json(tickets);
    
  } catch (error) {
    console.error("Error fetching tickets:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateStatus = async (req, res) => {
  const { ticketId, newStatus } = req.body;
  try {
    console.log("Request Body:", req.body);
    const updateTicket = await prisma.ticket.update({
      where: { id: ticketId },
      data: {
        status: newStatus,
        timestamps: new Date().toISOString(),
      },
    });
    res.status(200).json(updateTicket);
  } catch (error) {
    console.error("Error updating status:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};



module.exports = {
  createTicket,
  getAllTickets,
  updateStatus,
};
