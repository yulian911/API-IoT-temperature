const Router = require('express')
const Sensor = require('../controller/controller')
const router = new Router()

router.route('/')
          .get(Sensor.getData)
          .post(Sensor.postData)

module.exports =router