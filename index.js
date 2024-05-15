const BroadlinkRMPlatformHttp = require("./platform");
const fakegatoHistory = require("fakegato-history");

module.exports = (homebridge) => {
  HistoryService = fakegatoHistory(homebridge);

  global.Service = homebridge.hap.Service;
  global.Characteristic = homebridge.hap.Characteristic;

  BroadlinkRMPlatformHttp.setHomebridge(homebridge);

  homebridge.registerPlatform(
    "homebridge-broadlink-rm-pro-http",
    "BroadlinkRMHttp",
    BroadlinkRMPlatformHttp
  );
};
