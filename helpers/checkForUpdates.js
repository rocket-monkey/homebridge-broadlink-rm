const versionCheck = require("github-version-checker");
const pkg = require("../package.json");

const options = {
  repo: "homebridge-broadlink-rm",
  owner: "rocket-monkey",
  currentVersion: pkg.version,
  excludePrereleases: true,
};

const checkForUpdates = (log) => {
  versionCheck(options, (error, update) => {
    // if (error) throw error;
    if (update) {
      log(
        `\x1b[32m[UPDATE AVAILABLE] \x1b[0mVersion ${update.name} of Homebridge Broadlink RM Pro is available. The release notes can be found here: \x1b[4mhttps://github.com/${options.owner}/homebridge-broadlink-rm/releases/\x1b[0m`,
      );
    }
  });
};

module.exports = checkForUpdates;
