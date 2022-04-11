const express = require("express")
const datee = require('./middlwere/Date')
const app = express()

let b = app.use(datee)

/*app.get('/home',(req,res) => {
    res.sendFile(__dirname + '/public/home.html')
})


app.get('/service',(req,res) => {
    res.sendFile(__dirname + '/public/services.html')
})

app.get('/contact',(req,res) => {
    res.sendFile(__dirname + '/public/contact.html')
}) */
let a = app.use(express.static(__dirname + '/public'))
app.get('/',[a,b])


app.listen(4000,(err) => {
    if(err) console.log('server is not running')
    else console.log('server is running on port 4000')
})