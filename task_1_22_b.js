"use strict";

var _fs = _interopRequireDefault(require("fs"));
var _csvtojson = _interopRequireDefault(require("csvtojson"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var readStream = _fs["default"].createReadStream('./csv/data.csv', {
  highWaterMark: 10 // Determines how many bytes we will receive at a time.
});

var writeStream = _fs["default"].createWriteStream('./csv/data2.txt');
var readNumber = 1;
readStream.on('readable', function () {
  var chank = readStream.read();
  if (chank) {
    console.log(readNumber, " readable: ".concat(chank, "\n")); // Show just read data
    readNumber++;
  }
});

// Handl errors while reading

readStream.on('error', function (e) {
  console.log('Error during file reading: ', e);
});
(0, _csvtojson["default"])().fromStream(readStream)
//.subscribe((jsonObj)=>{ console.log(jsonObj) }) // Here we can subscribe (and log) for ready JSON 's objects
.on('error', function (error) {
  console.log('Error during converting', error);
}) // Handl errors while converting to csv    
.pipe(writeStream).on('error', function (e) {
  console.log('Error during writing: ', e);
}); // Handl errors while writing
