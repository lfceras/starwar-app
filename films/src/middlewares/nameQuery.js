const controllers = require('../controllers')

module.exports = (req, res, next)=>{
  const {name} = req.query
  if(!name) return next()
  else return controllers.getFilmsByName(req, res, next)
}