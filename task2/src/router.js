const express = require('express')
const router = express()

      router.get('/', (request, response) =>{
            response.send('Hello world!')
      })

module.exports = router