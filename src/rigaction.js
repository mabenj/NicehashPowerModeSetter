const Api = require("./api");

var log = function () {
	return console.log(...arguments);
};

function setPowerMode(config, powerMode) {
	const api = new Api(config);

	// get server time - required
	api
		.getTime()

		.then(() => {
			log("server time", api.time);
			log("--");
		})

		// set powermode
		.then(() => {
			var body = {
				rigId: config.rigId,
				deviceId: config.deviceId,
				action: "POWER_MODE",
				options: [powerMode]
			};

			return api.post("/main/api/v2/mining/rigs/status2", { body });
		})
		.then((res) => {
			log(`set ${powerMode}`, res);
			log("--");
		})

		.catch((err) => {
			if (err && err.response) log(err.response.request.method, err.response.request.uri.href);
			log("ERROR", err.error || err);
		});
}

exports.setPowerMode = setPowerMode;
