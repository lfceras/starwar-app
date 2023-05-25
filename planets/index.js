const app = require('./src/app')
const PORT = 8003

app.listen(PORT, ()=>{
  console.log(`Server is running on port ${PORT}`)
})