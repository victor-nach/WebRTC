const express = require('express');
const { ExpressPeerServer } = require('peer');

const app = express();

app.get('/', (req, res) => res.send('Welcome to this peerjs server'));

const server = app.listen(9000);

const peerServer =  ExpressPeerServer(server);

app.use('/peer', peerServer);