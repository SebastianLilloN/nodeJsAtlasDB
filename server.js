const express = require("express");
var app = express();
const server = require('http').Server(app);
const db = require('./db');
const socket = require('./socket');
const cors = require('cors');
const config = require('./config');
db(config.dbUrl);

const router = require('./network/routes');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
socket.connect(server);
router(app);



app.use('/app', express.static('public'));

server.listen(config.port, function(){
    console.log('Aplicacion escuchando en: ' + config.host + ':' + config.port);
});

