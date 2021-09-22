const net = require('net');

//establish connection with a game server

const connect = function () {
  const conn = net.createConnection({
    host: '135.23.223.133',
    port: '50542'
  });

  // interpret incoming data as Text
  conn.setEncoding('utf8');
  conn.on('data', (data) => {
    console.log('Incoming data -->', data)
  })

  return conn;
}

console.log('Connecting...');
connect();
