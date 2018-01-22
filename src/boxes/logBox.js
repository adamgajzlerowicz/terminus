// @flow

import blessed from 'blessed';

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

export default logBox;
