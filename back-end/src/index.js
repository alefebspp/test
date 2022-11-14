const express = require('express');
const cors = require('cors');
const connectToDataBase = require('./database');
const routes = require('./routes');
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
connectToDataBase();

app.listen(process.env.PORT || 3333, () => {
  console.log('App is runnig');
});
