// import express from 'express';\
// ya to me ese likh sakti hu ya import use kar sakti 
// import express from 'express';

require('dotenv').config()
const express= require('express')
const app = express();

const PORT = 4000

// iss upr wali line me hum app me store kr rhe he  
app.get('/', (req, res)=>{
    res.send('hello world!')
})
app.get('/twitter', (req, res) => {
    res.send('hey im again')
})
app.get('/login', (req,res) =>{
    res.send('im trying again')
})
app.listen(process.env.PORT, () => {
    console.log(`example app listening on port is thus ${PORT}`)
})
