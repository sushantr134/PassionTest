const express = require('express')
const testApp = express()
const path = require('path')
const morgan = require('morgan')
const cors = require('cors')
const compression = require('compression')
const routes = require('./Routes')


testApp.use(express.static(path.resolve(__dirname,'build')))
testApp.use(cors())
testApp.use(morgan())
testApp.use(compression())
testApp.use('/api',routes)

testApp.get('*',(req,res)=>{
  res.sendFile(path.resolve(__dirname,'build/index.html'))
})

testApp.listen(4000,(err)=>{
    if(err)
      console.log(err)
    else
        console.log('Server Started at 4000')  
})
