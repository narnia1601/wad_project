const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const bcrypt = require("bcrypt")
const cors = require('cors')

const app = express()
app.use(cors({
    origin: '*'
}))

app.use(bodyParser.json({limit: '50mb'}))
app.use(bodyParser.urlencoded({extended: false, limit: '50mb'}))

mongoose.connect('mongodb+srv://root:root@cluster0.waebkb4.mongodb.net/?retryWrites=true&w=majority')

var Schema = mongoose.Schema

var UserSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String
})

var ItinerariesSchema = new Schema({
    title: String,
    country: String, // added #1
    days: Number,
    attractions: [Schema.Types.Mixed],
    comments: [Schema.Types.Mixed]
})

var Users = mongoose.model('users', UserSchema)
var Itineraries = mongoose.model('itineraries', ItinerariesSchema)

app.post('/upload', (req,res) => {
    var title = req.body.body.title
    var country = req.body.body.country // added #2
    var days = req.body.body.days
    var upvotes = 0
    var itineraryArr = []
    var itineraryLength = req.body.body.files.length
    for(var i=0; i<itineraryLength; i++){
        var attractionLength = req.body.body.files[i].length
        var attractions = []
        for(var j=0; j<attractionLength; j++){
            var base64Data = req.body.body.files[i][j].image
            var split = base64Data.split(',')
            var base64 = split[1]
            attractions.push({
                location: req.body.body.files[i][j].location,
                description: req.body.body.files[i][j].description,
                lat: req.body.body.files[i][j].lat,
                lng: req.body.body.files[i][j].lng,
                venue: req.body.body.files[i][j].venue,
                image: base64,
            })
        }
        itineraryArr.push(attractions)
    }
    Itineraries.create({
        title: title,
        country: country, // added #3
        days: days,
        attractions: itineraryArr,
        comments: []
    }, () => {
        res.send("Itinerary created")
    })
})

app.post('/submitComment/:id', async (req, res) => {
    const firstName = req.body.firstName
    const comment = req.body.comment
    var commentObj = {
        firstName: firstName,
        comment: comment
    }
    const itineraries = await Itineraries.find({})
    var comments = []
    var id = ''
    itineraries.map(itinerary => {
        itineraryTitleTrimmed = itinerary.title.replace(/\s/g, "")
        if(itineraryTitleTrimmed == req.params.id){
            id = itinerary._id
            comments = itinerary.comments
        }
    })
    var filter = { _id: id }
    comments.unshift(commentObj)
    var update = { comments: comments }
    await Itineraries.findOneAndUpdate(filter, update)
    res.send("Comments submitted")
})

app.get('/itineraries', async (req,res) => {
    const itineraries = await Itineraries.find({})
    res.send(itineraries)
})

app.post('/login', (req,res) => {
    var email = req.body.email
    var password = req.body.password
    Users.find({email: email}, async (err, data) => {
        if(data.length > 0){
            const validPass = await bcrypt.compare(password, data[0].password)
            if(validPass){
                res.send(data[0]._id)
            }else{
                res.send('Incorrect email or password')
            }
        }else{
            res.send('Incorrect email or password')
        }
    })
})

app.post('/register', async (req,res) => {
    var email = req.body.email
    const emailExists = await Users.findOne({ email: email })
    if(emailExists){
        res.send("Email already exists")
    }else{
        var password = req.body.password
        var firstName = req.body.firstName
        var lastName = req.body.lastName
        const hash = await bcrypt.hash(password, 10)
        Users.create({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: hash
        }, () => {
            res.send("It's working")
        })
    }
})

app.get('/user', async (req,res) => {
    var _id = req.query._id
    Users.findOne({_id: _id}, async (err, data) => {
        res.send(data)
    })
})

app.get('/itineraries/:id', async (req,res) => {
    var id = req.params.id
    Itineraries.findOne({id: id}, (err, data) => {
        res.send(data)
    })
})


// added #4
// Mongodb agrgegate $match by country
app.get('/itineraries/:country', (req, res) => {
    console.log(req)
    var countrySearched = req.body.body.country
    Itineraries.aggregate([
        {
            $match: {
                country: countrySearched
            }
        }
    ],
        (err, data) => {
            res.send(data)
        }
    )
})


app.get('/', (req,res) => {
    res.send("It's working")
})

app.listen(8080)