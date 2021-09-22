const net = require('net');
const { IP, PORT } = require('./constants');
//establish connection with a game server

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  const name = 'UJJ';
  // interpret incoming data as Text
  conn.setEncoding('utf8');

  //On make connection to the server
  conn.on('connect', () => {
    console.log('Name:', name);
  })

  conn.on('data', (data) => {
    console.log('Key press : ', data)
  })

  return conn;
}

module.exports = connect;