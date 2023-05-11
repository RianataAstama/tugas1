const express = require('express')
const app = express()
const port = 3000

app.get('/api/node1', (req, res) => {
  res.status(200).send('Hello World from node1')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
