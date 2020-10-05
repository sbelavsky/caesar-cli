# caesar-cli
Simple cli tool for caesar cypher encoding/decoding

run `npm install` to install dependencies

```
Usage: caesar-cli [options]

Options:
  -s, --shift <number>   a shift
  -a, --action <string>  an action encode/decode
  -i, --input <path>     an input file
  -o, --output <path>    an output file
  -h, --help             display help for command
```

Call example:

`node caesar-cli/caesar-cli.js -i "./test.txt" -o "out.txt" -s 1 -a encode`