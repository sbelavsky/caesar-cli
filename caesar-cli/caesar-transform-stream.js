const { Transform } = require('stream');

module.exports = class CaesarTransform extends Transform {

    constructor(shift) {
        super()
        this.shift = shift
    }

    caesar(text, shift) {
        return text.map((ch) => this.shift_letter(ch, shift)).join('')
    }

    shift_letter(letter, shift) {
        var asciiVal = letter.charCodeAt(0);
        if (asciiVal >= 65 && asciiVal <= 90) {
            //letter is uppercase
            asciiVal = ((asciiVal - 65 + shift) % 26);
            if (asciiVal < 0) asciiVal = 91 + asciiVal;
            else asciiVal += 65;
        }
        if (asciiVal >= 97 && asciiVal <= 122) {
            //letter is lowercase
            asciiVal = ((asciiVal - 97 + shift) % 26);
            if (asciiVal < 0) asciiVal = 123 + asciiVal;
            else asciiVal += 97;
        }

        return String.fromCharCode(asciiVal);
    }

    _transform(chunk, enc, cb) {
        var splitted = chunk.toString().split('');
        this.push(this.caesar(splitted, this.shift));
        cb();
    }
}