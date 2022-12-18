import fs from 'fs'
import csv from 'csvtojson'

const readStream = fs.createReadStream('./csv/data.csv', { 
    highWaterMark: 10  // Determines how many bytes we will receive at a time.
})

const writeStream =  fs.createWriteStream('./csv/data2.txt')
let readNumber = 1

readStream.on('readable', () =>{
    let chank = readStream.read()
    if (chank) {      
        console.log(readNumber, ` readable: ${chank}\n`) // Show just read data
        readNumber ++
    }
})

// Handl errors while reading

readStream.on('error', function(e){ console.log('Error during file reading: ', e)})

csv()
    .fromStream(readStream)
    //.subscribe((jsonObj)=>{ console.log(jsonObj) }) // Here we can subscribe (and log) for ready JSON 's objects
    .on('error',(error)=> { console.log('Error during converting', error) }) // Handl errors while converting to csv    
    .pipe(writeStream)
    .on('error', function(e){ console.log('Error during writing: ', e)}) // Handl errors while writing
    