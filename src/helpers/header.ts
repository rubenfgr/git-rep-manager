const showHeader = (title: string) => {
  const len = title.length + 20;
  console.log('='.repeat(len).blue);
  console.log(' '.repeat(10) + title.white + ' '.repeat(10));
  console.log('='.repeat(len).blue);
};

export { showHeader };
