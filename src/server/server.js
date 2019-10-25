const express = require('express')
const app = express();
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on ${port}`)
})

app.get('/', (req,res) => {
  // res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' })
  res.send(<h1>BACK END</h1>)
})

