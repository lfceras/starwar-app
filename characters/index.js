const app = require('./src/app')
const PORT = 8001

app.listen(PORT, ()=>{
  console.log(`Server listening on port: ${PORT}`)
})