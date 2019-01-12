const express = require('express')
const router = express.Router()
const path = require('path')
const app = express();

const categories = require('./json/categories.json')
const verticals = require('./json/verticals.json')
const courses = require('./json/courses.json')

router.get('/:id',(req,res)=>{
    
    const id = req.params.id;

    if(id === 'categories')
    {
        res.send(categories)
    }
    else if(id === 'verticals')
    {
        res.send(verticals)
    }
    else if(id === 'courses')
    {
        res.send(courses)
    }
    else
    {
        res.status(404).send({message:'Not Such List Found',code:'404'})
    }
})

module.exports = router