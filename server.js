const app = require('express')()

app.get('/', (req, res) => {
  res.send('Hello World')
})

const PORT = process.env.PORT || 4444

app.listen(PORT, () => {
  console.log(`Started on http://localhost:${PORT}`)
})
