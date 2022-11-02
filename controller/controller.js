const {Sensor} = require('../models/models')



const postData =async(req,res)=>{
    let data =req.body
    const sensor =await Sensor.create(data)
    res.status(201).send(sensor)
    return;
}
const getData =async(req,res)=>{
  const sensor =await Sensor.findAll()
  res.status(201).send(sensor)
  return;
}

module.exports = {postData,getData };
