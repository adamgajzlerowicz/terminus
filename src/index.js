// @flow

import blessed from 'blessed';
const { spawn } = require('child_process');
import screen from './screen';
import logBox from './boxes/logBox';

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
screen.append(logBox);

screen.render();

screen.key(['c'], function(ch, key) {
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
});
