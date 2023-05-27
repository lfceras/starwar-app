const store = require('../db')

module.exports = async (req, res)=>{
  const {model, id} = req.params
  const resulst = await store[model].get(id)
  res.status(200).json(resulst)
}