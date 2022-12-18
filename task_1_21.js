var fs = require('fs');
const csv = require('csvtojson')
  
// Constructing finished from stream
const { pipeline } = require('stream');
  
// Constructing promisify from
// util
const { promisify } = require('util');
  
// Defining pipelineAsync method
const pipelineAsync = promisify(pipeline);
  
// Constructing readable stream
const readable = fs.createReadStream('./csv/data.csv');
  
// Constructing writable stream
var writable = fs.createWriteStream("./csv/task_1_21.txt");
  
// Creating transform stream
const transform = csv();
  
// Async function
(async function run() {
  try{ 
  
    // pipelining three streams
    await pipelineAsync(
      readable,
      transform,
      writable
    );
    console.log("pipeline accomplished.");
    }
  
  // Shows error
  catch(err) {
    console.error('pipeline failed with error:', err);
  }
  })();