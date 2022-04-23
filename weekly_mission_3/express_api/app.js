// Usando objeto express.
const express = require('express')
// App de express.
const app = express()
// Indicamos que usaremos json.
app.use(express.json())
// Puerto en que veremos nuestra app.
const port = 3000

app.get('/', (req, res) => {
    res.send("Hello World!")
})

// HTTP METHODS.
app.get('/v1/explorers', (req, res) => {
    console.log(`Api Explorers GET ALL request ${new Date()}`)
    const explorer1 = {id: 1, name: "Carlo1"}
    const explorer2 = {id: 2, name: "Carlo2"}
    const explorer3 = {id: 3, name: "Carlo3"}
    const explorer4 = {id: 4, name: "Carlo4"}
    const explorers = [explorer1, explorer2, explorer3, explorer4]
    res.status(200).json(explorers)
})

// endpoint regresa explorer mediante id.
app.get('/v1/explorers/:id', (req, res) => {
    console.log(`Api Explorers Get request ${new Date()}`)
    console.log(`Gettin explroer with id ${req.params.id}`)
    const explorer = {id: 1, name: "Orlando"}
    res.status(200).json(explorer)
})

// endpoint para crear explorer.
app.post('/v1/explorers', (req, res) => {
    console.log(`API Explorers POST request ${new Date()}`)
    const requestBody = req.body // Parametros de un cliente
    res.status(201).json({message: "created"})
})

// endpoint actualizar explorer.
app.put('/v1/explorers/:id', (req, res) => {
    console.log(`Api Explorers PUT request ${new Date()}`)
    console.log(`Update explorer with id ${req.params.id}`)
    const requestBody = req.body // Parametros del cliente.
    res.status(200).json({message: "Updated"})
})

// endpoint eliminar explorer.

app.delete('/v1/explorers/:id', (req, res) => {
    console.log(`Api Explorers DELETE request ${new Date()}`)
    console.log(`Delete explorer with id ${req.params.id}`)
    const requestBody = req.body // Parámetros de un cliente.
    res.status(200).json({message: "Deleted"})
})
// Con esto inicializamos la app.
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})