const {reponse} = require('../utils')
const store = require('../db')

module.exports = async (req, res)=>{
  const {model, id} = req.params
  const resulst = await store[model].get(id)
  // reponse(res, 200, resulst)
  res.status(200).json(resulst)
}