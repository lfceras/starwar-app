const {fetchData} = require('../data/fecthData') 
const {response} = require('../utils')

module.exports = async (req, res)=>{
  const charcters2 = await fetchData()
  response(res,200,charcters2)
}