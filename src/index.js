// @flow

import blessed from 'blessed';
const { spawn } = require('child_process');
import screen from './screen';
import logBox from './boxes/logBox';
import menuBox from './boxes/menuBox';
import { state, updateState } from './state';

screen.append(menuBox);
screen.append(logBox);

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

screen.render();
