const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const { connect } = require('./client');

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  stdin.on('data', handleUserInput);

  return stdin;
}

const handleUserInput = function (data) {
  if (data.key === 'c' && data.key.name === key.ctrl) {
    rl.close();
  }
}

console.log('Connecting...');
connect();
setupInput(rl);