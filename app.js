// importing modules
require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')

// creating express app
const app = express();
app.use(bodyParser.json())

// app middlewares
app.get('/',(req,res) => {
    res.send('server is running')
})
app.post('/NEW',(req,res) => {
    console.log("NEW",req.body)
    res.send(req.body)
})
app.post('/RECEIVED',(req,res) => {
    console.log("RECEIVED",req.body)
    res.send(req.body)
})
app.post('/WAITING_FOR_TRANSPORT',(req,res) => {
    console.log("WAITING_FOR_TRANSPORT",req.body)
    res.send(req.body)
})
app.post('/ASSIGNED_TO_TRANSPORT',(req,res) => {
    console.log("ASSIGNED_TO_TRANSPORT",req.body)
    res.send(req.body)
})
app.post('/COURIER_ACCEPTED_DELIVERY',(req,res) => {
    console.log("COURIER_ACCEPTED_DELIVERY",req.body)
    res.send(req.body)
})
app.post('/NEAR_VENDOR',(req,res) => {
    console.log("NEAR_VENDOR",req.body)
    res.send(req.body)
})
app.post('/PICKED_UP',(req,res) => {
    console.log("PICKED_UP",req.body)
    res.send(req.body)
})
app.post('/COURIER_LEFT_VENDOR',(req,res) => {
    console.log("COURIER_LEFT_VENDOR",req.body)
    res.send(req.body)
})
app.post('/NEAR_CUSTOMER',(req,res) => {
    console.log("NEAR_CUSTOMER",req.body)
    res.send(req.body)
})
app.post('/DELIVERED',(req,res) => {
    console.log("DELIVERED",req.body)
    res.send(req.body)
})
app.post('/DELAYED',(req,res) => {
    console.log("DELAYED",req.body)
    res.send(req.body)
})
app.post('/CANCELLED',(req,res) => {
    console.log("CANCELLED",req.body)
    res.send(req.body)
})

module.exports = app