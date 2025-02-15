const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const ticketRoutes = require('./routes/ticketRoutes');
const app = express();
const port = 4000;

app.use(cors());
app.use(bodyParser.json());


app.use('/api', ticketRoutes);


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
})