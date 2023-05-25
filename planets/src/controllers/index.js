const { catchedAsync } = require("../utils");

module.exports = {
  getPlanets: catchedAsync(require('./getplanets'))
}