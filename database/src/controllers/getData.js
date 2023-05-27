const store = require('../db')

module.exports = async (req, res)=>{
  const {model} = req.params
  let resulst = await store[model].list()
  res.status(200).json(resulst)
}