const {Router} = require('express')
const planets = require('../controllers')
const middlewares = require('../middlewares')

const router = Router()

router.get('/', middlewares.nameQuery, planets.getPlanets)
router.get('/:id', middlewares.validateIdParam, planets.getPlanetsById)


module.exports = router