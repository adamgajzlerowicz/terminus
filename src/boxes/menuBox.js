import blessed from 'blessed';

const menu: string[] = [
  '',
  'a: checkout branch',
  'b: start dev server',
  'c: start test'
];

const menuBox = blessed.box({
  top: 0,
  left: 0,
  width: '50%',
  height: '70%',
  content: menu.join('\n '),
  tags: true,
  border: 'none',
  style: {
    fg: 'white',
    bg: '#0083C5'
  }
});

export default menuBox;
