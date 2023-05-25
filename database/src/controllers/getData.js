const {reponse} = require('../utils')
const store = require('../db')

module.exports = async (req, res)=>{
  const {model} = req.params
  let resulst = await store[model].list()
  // reponse(res, 200, resulst)
  res.status(200).json(resulst)
}