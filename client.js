const net = require('net');

//establish connection with a game server

const connect = function () {
  const conn = net.createConnection({
    host: '135.23.223.133',
    port: '50542'
  });

  const name = 'UJJ';
  // interpret incoming data as Text
  conn.setEncoding('utf8');

  //On make connection to the server
  conn.on('connect', () => {
    console.log('Name:', name);

  })

  conn.on('data', (data) => {
    console.log('Incoming data -->', data)
  })

  return conn;
}

module.exports = { connect };