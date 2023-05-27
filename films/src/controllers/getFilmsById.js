const axios = require('axios')
const {response} = require('../utils')

// module.exports = async (req, res)=>{
//   const { id } = req.params
//     let films = await axios.get(`http://localhost:8004/Film/${id}`)
//   response(res, 200, films.data)
// }

module.exports = async (req, res)=>{
  const { id } = req.params
    let films = await axios.get(`http://database:8004/Film/${id}`)
  response(res, 200, films.data)
}