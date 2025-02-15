const express = require('express');
const { createTicket, getAllTickets, updateStatus } = require('../controllers/ticketController');

const router = express.Router();

router.get('/tickets', getAllTickets);
router.post('/tickets', createTicket);
router.patch('/tickets/status', updateStatus);

module.exports = router;