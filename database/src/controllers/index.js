const {catchedAsync} = require('../utils')

module.exports ={
  getData: catchedAsync(require('./getData')),
  getDataById: catchedAsync(require('./getDataById'))
}