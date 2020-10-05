const { program } = require('commander');
const exitWithError = require('./error-handler')

program
    .storeOptionsAsProperties(false)
    .requiredOption('-s, --shift <number>', 'a shift')
    .requiredOption('-a, --action <string>', 'an action encode/decode')
    .option('-i, --input <path>', 'an input file')
    .option('-o, --output <path>', 'an output file')
    .parse(process.argv);


var { input, output, shift, action } = program.opts()
var shift = parseInt(shift)

if (isNaN(shift)) {
    exitWithError('shift is not a number')
}

switch (action) {
    case 'encode':
        break;
    case 'decode':
        shift = -shift
        break;
    default:
        exitWithError('unkown action: ' + action)
}

module.exports = {
    input: input,
    output: output,
    shift: shift,
    action: action
}