require('dotenv').config()
const express = require('express');
const sequelize = require('./db')
const router = require('./routes/index')
const PORT = process.env.PORT ||4000

const app = express();
app.use(express.json())
app.use('/api/',router)

const start =async()=>{
  try{
    await sequelize.authenticate()
    await sequelize.sync({alter:true})

    app.listen(PORT ,()=>{
      console.log('Server started on port ', PORT)
    })
  }catch(err){ 
     console.log(err) 
    }
}

start()