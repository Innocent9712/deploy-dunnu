const express = require('express')
const app = express()

const PORT = process.env.port | 5000

app.use(express.urlencoded({extended: true}))
app.use(express.static('./public'))

app.get('/', (req, res) => {
    res.render('./public/index.html')
})

app.all('*', (req, res) => {
    res.status(404).send('resource not found')
  })

app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`)
})