const store = require('../db')

module.exports = async (req, res)=>{
  const {model} = req.params
  const {name} = req.query
  let resulst = await store[model].list(name)
  res.status(200).json(resulst)
}