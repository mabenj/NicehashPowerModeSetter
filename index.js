const fs = require("fs");
const path = require("path");

var argv = require("minimist")(process.argv.slice(2));

let config = null;
try {
	var dirname = argv.config ? path.dirname(argv.config) : process.cwd();
	config = JSON.parse(fs.readFileSync(path.join(dirname, "./config.json")));
} catch {
	console.log("Could not open the 'config.json' file");
}

if (argv.mode && config) {
	const { setPowerMode } = require("./src/SetPowerMode");
	setPowerMode(config, argv.mode.toUpperCase());
} else if (!argv.mode) {
	console.log("Specify a power mode with '--mode' (LOW, MEDIUM or HIGH)");
}
