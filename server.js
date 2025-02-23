const PORT = 8989
const express = require("express")
const fs = require("fs")
const path = require("path")
const webroot = path.join(__dirname, 'public')

const app = express()

app.use(express.static(webroot))

app.get("/", (req, res) => {
    res.sendFile(path.join(webroot, "index.html"))
})
app.get("/home", (req, res) => {
    res.sendFile(path.join(webroot, "index.html"))
})

app.listen(PORT, () => {
    console.log("user")
})