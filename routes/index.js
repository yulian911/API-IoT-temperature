const Router = require('express')
const Sensor= require('./sensor')
const router = new Router()

router.use('/sensor',Sensor)

module.exports =router