import fs from 'node:fs'
import csv from 'csvtojson'

const readStream = fs.createReadStream('./csv/data.csv', {
    highWaterMark: 2
})
 
const writeStream =  fs.createWriteStream('./csv/data.txt')
 
readStream
    .on('error', function(e){ console.log('Error during file reading: ', e)})
    .pipe(csv())
    .on('error', function(e){ console.log('Error during CSV parsing: ', e)})
    .pipe(writeStream)
    .on('error', function(e){ console.log('Error during writing: ', e)})