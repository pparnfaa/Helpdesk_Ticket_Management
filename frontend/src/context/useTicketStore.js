import { create } from "zustand";

const useTicketStore = create((set) => ({
  tickets: [],

  formData: {
    title: "",
    description: "",
    contactInfo: "",
    timestamps: "",
    status: "PENDING",
  },

  addTicket: (newTicket) =>
    set((state) => ({
      tickets: [
        ...state.tickets,
        { ...newTicket, id: Date.now()},
      ],
    })),

  setFormData: (name, value) =>
    set((state) => ({
      formData: {
        ...state.formData,
        [name]: value,
      },
    })),

  setTimestamps: (callback) =>
    set((state) => {
      const curruntTime = new Date();
      const updatedFormData = {
        ...state.formData,
        timestamps: curruntTime,
        // latestTimestamps: curruntTime,
      };
      if (callback) callback(updatedFormData);
      return { formData: updatedFormData };
    }),

  setStatus: (ticketId, newStatus) =>
    set((state) => ({
      tickets: state.tickets.map((ticket) =>
        ticket.id === ticketId ? { ...ticket, status: newStatus } : ticket
      ),
    })),

  setTickets: (newTickets) =>
    set((state) => ({
      tickets: newTickets,
    })),

  resetForm: () =>
    set({
      formData: {
        title: "",
        description: "",
        contactInfo: "",
        timestamps: "",
        status: "PENDING",
      },
    }),
}));

export default useTicketStore;
