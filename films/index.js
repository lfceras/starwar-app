const app = require('./src/app')
const PORT = 8002

app.listen(PORT, ()=>{
  console.log(`Server listening on port: ${PORT}`)
})