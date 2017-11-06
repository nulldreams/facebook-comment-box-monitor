var express = require('express')
var bodyParser = require('body-parser')
const token = '__token'
var app = express()
var port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.get('/', (req, res) => {
    res.sendfile('public/index.html')
})

app.get('/webhook', (req, res) => {
    if (req.query['hub.mode'] && req.query['hub.verify_token'] === 'tutorial_comentarios') {
        res.status(200).send(req.query['hub.challenge'])
    } else {
        res.status(403).end()
    }
})


app.post('/webhook', (req, res) => {
    let new_comment = req.body.entry[0].changes
    let usuario = req.body.entry[0].changes[0].value.from

    let comment = {
        user: {
            id: usuario.id,
            name: usuario.name
        },
        message: new_comment[0].value.message
    }


    if (new_comment[0].field === 'plugin_comment') {
        console.log(`Profile: http://facebook.com.br/${comment.user.id}\r\nName: ${comment.user.name}\r\nMessage: ${comment.message}`)
    }
})

const server = app.listen(port, () => {
    console.log(`On ${port}`)
})