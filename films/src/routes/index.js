const {Router} = require('express')
const films = require('../controllers')
const router = Router()
const middlewares = require('../middlewares')

router.get('/', middlewares.nameQuery, films.getFilms)
router.get('/:id', middlewares.validateIdParam, films.getFilmsById)

module.exports = router