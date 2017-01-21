const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('nice')
})

app.listen(process.env.PORT || 8000, err => {
  if (err){ throw err}
  console.log('listening')
})
