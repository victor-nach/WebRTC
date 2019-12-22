const express = require('express');
const { ExpressPeerServer } = require('peer');

const app = express();

app.get('/', (req, res) => res.send('Welcome to this peerjs server'));

const PORT = process.env.PORT || 9000;

const server = app.listen(PORT);

const peerServer =  ExpressPeerServer(server);

app.use('/peer', peerServer);