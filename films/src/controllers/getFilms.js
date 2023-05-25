// const films = require('../data')
const {response} = require('../utils')
const {fetchFilms} = require('../data/fetchFilms')

module.exports = async (req, res)=>{
  const films2 = await fetchFilms()
  response(res, 200, films2)
}