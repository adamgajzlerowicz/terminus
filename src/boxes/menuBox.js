import blessed from 'blessed';

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

export default blessed;
