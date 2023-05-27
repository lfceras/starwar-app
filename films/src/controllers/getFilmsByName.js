const axios = require('axios')
const {response} = require('../utils')
const { ClientError } = require('../utils/errors')

// module.exports = async (req, res)=>{
//   const { title } = req.query
//     let films = await axios.get(`http://localhost:8004/Film?${title}`)
//     if(films.length === 0) throw new ClientError('Not Found', 404)
//   response(res, 200, films.data)
// }


module.exports = async (req, res)=>{
  const { title } = req.query
    let films = await axios.get(`http://database:8004/Film?${title}`)
    if(films.length === 0) throw new ClientError('Not Found', 404)
  response(res, 200, films.data)
}