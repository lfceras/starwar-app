const {Router} = require('express')
const planets = require('../controllers')


const router = Router()

router.get('/', planets.getPlanets)


module.exports = router