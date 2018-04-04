import run from './run';

console.log('loading deployOnHeroku');

async function deployOnHeroku() {
  console.log('running deployOnHeroku');
  if (process.env.NODE_ENV == 'production') {
    process.argv.push('--release');
    await run(require('./build'));
  }
}

export default deployOnHeroku;
