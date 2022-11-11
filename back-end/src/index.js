const express = require('express');
const cors = require('cors');
const connectToDataBase = require('./database');
const app = express();

app.use(cors());
app.use(express.json());
connectToDataBase();

app.listen(3333, () => {
  console.log('App is runnig');
});
