if (process.env.NODE_ENV === "production") {
  module.exports = require("./lib/prod.js");
} else {
  module.exports = require("./lib/dev.js");
}
