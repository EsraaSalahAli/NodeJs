const express = require('express')
const app = express()
const indexRoute = require('./Routes/index_route')
const ClientRoute = require('./Routes/Client_route')
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/Uber',
{
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Connected!'));

app.use(express.json())

indexRoute(app)
ClientRoute(app)
app.use((err, req, res, next)=>{
  res.status(422).send({error: err.message})
})
module.exports = app;
