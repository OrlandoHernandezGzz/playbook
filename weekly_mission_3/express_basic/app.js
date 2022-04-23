// Usando objeto express.
const express = require('express')
// App de Express.
const app = express()
// Puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000

// Path inicial, responderá a la url localhost:3000
app.get('/', (req, res) => {
    res.send('Hello World!')
})

// Agregando nueva ruta.
app.get('/launchx', (req, res) => {
    res.send('Bienvenidos a launchx')
})

// Agregando nueva ruta regresando un objeto.
app.get('/explorersInNode', (req, res) => {
    const explorer = {name: "Explorer", msg: "Hello"}
    res.send(explorer)
})

// Nueva ruta agregando query params.
app.get('/explorers/:explorerName', (req, res) => {
    res.send(req.params)
}) // :explorerName indica valor enviado por url

// Con esto inicializamos esta app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

