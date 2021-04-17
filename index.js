const fs = require("fs");
const path = require("path");

const [, , powerMode, configPath] = process.argv;

let config = null;
try {
	var dirname = configPath ? path.dirname(configPath) : process.cwd();
	config = JSON.parse(fs.readFileSync(path.join(dirname, "./config.json")));
} catch {
	console.log("Could not open the 'config.json' file: ");
}

if (powerMode && config) {
	const rigAction = require("./src/rigaction");
	rigAction.setPowerMode(config, powerMode.toUpperCase());
} else if (!powerMode) {
	console.log("Give a powermode as an argument (LOW, MEDIUM or HIGH)");
}

(async () => {
	await sleep(5000);
})();

function sleep(millis) {
	return new Promise((resolve) => setTimeout(resolve, millis));
}
