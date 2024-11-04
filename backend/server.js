import express from 'express'
import cors from 'cors'
import fs from 'fs'

const server = express();
const PORT = 4000;

// Middleware
server.use(cors());

const data = fs.readFileSync('data.json', 'utf8');
const jsonData = JSON.parse(data);

server.get("/", (req, res) => {
    console.log("Ich bekomme ein Get")
    res.send("Hello From New Node!")
})


server.get("/todos", (req, res) => {
    console.log("Ich bekomme ein Get")
    res.json(jsonData)
})

server.get("/todos/HA", (req, res) => {
    console.log("Ich bekomme ein Get")
    res.send("Deine Hausaufgaben für heute")
})

console.log("Server online")
server.listen(PORT)