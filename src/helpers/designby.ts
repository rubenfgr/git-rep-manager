const designBy = () => {
  const title = '  RubenFGR Code  ';
  const len = title.length + 30;
  console.log('-'.repeat(15).blue + title.white.bold + '-'.repeat(15).blue);
  console.log('Author:  '.white + 'Rubén Francisco Gazquez Rosales'.green);
  console.log('Github:  '.white + 'https://github.com/rubenfgr'.green);
  console.log('Web:     '.white + 'https://rubenfgr-code.es'.green);
  console.log('-'.repeat(len).blue);
};

export { designBy };
