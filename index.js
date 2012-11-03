
var Set = require("./lib/set");
var util = require("./lib/util");
var MemoryAscoltatore = require('./lib/memory_ascoltatore');

module.exports.use = function use(ascoltatore) {
  ["publish", "subscribe", "removeListener", "reset", "on"].forEach(function(f) {
    module.exports[f] = ascoltatore[f].bind(ascoltatore);
  });

  util.aliasAscoltatore(this);

  return this;
};

module.exports.use(new MemoryAscoltatore());

module.exports.MemoryAscoltatore = MemoryAscoltatore;
module.exports.RedisAscoltatore = require("./lib/redis_ascoltatore");
module.exports.ZeromqAscoltatore = require("./lib/zeromq_ascoltatore");
module.exports.RabbitAscoltatore = require("./lib/rabbit_ascoltatore");
module.exports.Set = Set;
module.exports.util = util;
