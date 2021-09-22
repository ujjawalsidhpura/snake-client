let connection;

// const { stdin } = require('process');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const setupInput = function (conn) {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  stdin.on('data', (key) => { handleUserInput(key) });

  return stdin;
}

const handleUserInput = function (key) {
  if (key === 'c' &&
    key.name === key.ctrl) {
    rl.close();
  }
  if (key === 'w') {
    connection.write('Move: up')
  }
  if (key === 's') {
    connection.write('Move: down')
  }
  if (key === 'a') {
    connection.write('Move: left')
  }
  if (key === 'd') {
    connection.write('Move: right')
  }

}

module.exports = setupInput;
