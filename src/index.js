//create a command line interface that lets the user specify a file and the node process //counts the number of words inside it.

// example 
// Input - node index.js /user/kirat/test.txt
// output - you have 10 words in this file 
//use commander.js library

const { Command } = require('commander');
const fs = require('fs');
const program = new Command();

program
  .name('Word Counter')
  .description('A simple word Count CLI')
  .version('0.1.0');

program.command('count-words')
  .description('path for file to count no.of words')
  .argument('<string>', 'path to count words')
//   .option('-s')
  .action((string) => {
    var data=fs.readFileSync(string, 'utf-8');
    var res=data.toString().split(' ').length;
    console.log(`you have ${res} words in this file`);
  });

program.parse();
