const axios = require('axios')
const {response} = require('../utils')
const {ClientError} = require('../utils/errors')

// module.exports = async (req, res)=>{
//   const {name} = req.query
//   const characters = await axios.get(`http://localhost:8004/Character?${name}`)
//   if(characters.length === 0) throw new ClientError('Not found', 404)
//   response(res, 200, characters.data)
// }


module.exports = async (req, res)=>{
  const {name} = req.query
  const characters = await axios.get(`http://database:8004/Character?${name}`)
  if(characters.length === 0) throw new ClientError('Not found', 404)
  response(res, 200, characters.data)
}