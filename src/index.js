// @flow

import blessed from 'blessed';
const { spawn } = require('child_process');

const screen = blessed.screen({
  smartCSR: true
});

screen.title = 'my window title';

const menuBox = blessed.box({
  top: 0,
  left: 0,
  width: '50%',
  height: '70%',
  content: 'a: checkout branch \nb: start devServer\nc: start test',
  tags: true,
  border: 'none',
  style: {
    fg: 'white',
    bg: '#0083C5'
  }
});

screen.append(menuBox);

const logBox = blessed.box({
  top: 0,
  right: 0,
  content: '',
  border: 'none',
  width: '50%',
  scrollable: true,
  alwaysScroll: true,
  height: 20,
  style: {
    scrollbar: {
      bg: 'blue'
    }
  }
});

const startTest = () => {};

process.stdin.on('keypress', (e: string) => {
  if (e === 'c') {
    let logContent = '';
    const ps = spawn('node', ['src/test.js']);
    ps.stdout.setEncoding('utf8');
    ps.stdout.on('data', (data: string) => {
      logContent = logContent + data;
      logBox.setContent(logContent);
      logBox.setScrollPerc(100);
      screen.render();
    });
    ps.stderr.on('data', (data: string) => {
      console.log(`ps stderr: ${data}`);
    });
  }
});
screen.append(logBox);

// Quit on Escape, q, or Control-C.
screen.key(['escape', 'q', 'C-c'], function(ch, key) {
  return process.exit(0);
});

screen.render();
