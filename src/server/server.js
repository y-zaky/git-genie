const express = require('express')
const app = express();
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on ${port}`)
})

app.get('/backend', (req,res) => {
  // res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' })
   // const url = `api.github.com/users/${form.githubUser}/repos`
   console.log('called backend', req,res)
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' })
})

