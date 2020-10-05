module.exports = function exitWithError(msg) {
    console.error(msg)
    process.exit(1)
}