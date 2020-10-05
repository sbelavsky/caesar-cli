const { pipeline } = require('stream');
const fs = require('fs');
const { stdin, stdout } = require('process');
const CaesarTransform = require('./caesar-transform-stream')
const exitWithError = require('./error-handler')
const {input, output, shift, action} = require('./cli-config-provider')


pipeline(
    input ? fs.createReadStream(input) : stdin,
    new CaesarTransform(shift),
    output ? fs.createWriteStream(output, { flags: 'a' }) : stdout,
    (err) => {
        if (err) {
            exitWithError(`Caesar ${action} failed: ` + err.message)
        } else {
            console.log(`Caesar ${action} succeeded`);
        }
    }
);