"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var port = process.env.PORT || 3000;
var app = (0, _express["default"])();
app.get('/', function (req, res) {
  res.send('Welcome home...');
});
app.listen(port, function () {
  console.log("Server is running at port ".concat(port));
});
var _default = app;
exports["default"] = _default;