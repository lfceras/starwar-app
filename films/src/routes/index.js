const {Router} = require('express')
const films = require('../controllers')

const router = Router()

router.get('/', films.getFilms)

module.exports = router