const { catchedAsync } = require("../utils");

module.exports = {
  getPlanets: catchedAsync(require('./getplanets')),
  getPlanetsById: catchedAsync(require('./getPlanetsById')),
  getPlanetsByName: catchedAsync(require('./getPlanetsByName'))
}