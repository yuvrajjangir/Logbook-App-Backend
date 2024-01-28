const express = require('express');
const {connection} = require('./config/db');
const cors = require("cors");
const bodyParser = require("body-parser");
const {UserRouter} = require("./routes/userrouter");
const {Expenserouter} = require("./routes/expenserouter");
const {LocationRouter} = require("./routes/locationrouter");
const {PdfRouter} = require("./routes/pdfrouter");
const {StatsRouter} = require("./routes/statsrouter");
const {TripRouter} = require("./routes/triprouter");
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use("/", UserRouter);
app.use('/trips', TripRouter);
app.use('/locations', LocationRouter);
app.use('/expenses', Expenserouter);
app.use('/logbook', StatsRouter);
app.use('/', PdfRouter);

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
  
    if (req.method === 'OPTIONS') {
      res.sendStatus(200); // Respond to preflight request
    } else {
      next();
    }
  });

  
const PORT = process.env.PORT;
app.listen(PORT, async (req, res) => {
    try {
        await connection
        console.log("connected to MongoDB");
    } catch (error) {
        console.error(error);
    }
    console.log(`Listening on ${PORT}`);
})