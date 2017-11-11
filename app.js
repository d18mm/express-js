const express = require('express')
const app = express()
const bodyParser = require('body-parser');

const index = require('./routes/index')
const penerbangan = require('./routes/penerbangan')
app.use(bodyParser.urlencoded({extended: false}));
app.set('view engine', 'ejs');

app.use('/',index)
app.use('/penerbangan',penerbangan)





app.listen(3000,()=>{
  console.log('star 3000');
})
