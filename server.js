const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')
const mongoose = require('mongoose')
const City = require('./models/weather')
const path = require('path')

const app = express();
const router = express.Router();

const API_PORT = process.env.API_PORT || 3030;

mongoose.connect('mongodb+srv://admin:admin@cluster0-bdhvc.mongodb.net/test?retryWrites=true&w=majority',{ useNewUrlParser: true })
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));


router.get('/', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

router.get('/city', (req, res) => {
  // res.send({message: 'a'})
  console.log(City)
  City.find((err, city) => {
    if (err) return res.json({ error: err });
    return res.json({data: city });
  });
});

router.post('/city', (req, res) => {
  var city = new City(req.body);
  // res.send(req.body)

  // const text= req.body;
  if (!city.city) {
    return res.json({
      success: false,
      error: 'You must provide a city'
    });
  }
  // city = text.city;
  // res.send(city)
  city.save(err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});
router.delete('/city/:cityId', (req, res) => {
  const { cityId } = req.params;
  if (!cityId) {
    return res.json({ success: false, error: 'No city id provided' });
  }
  City.remove({ _id: cityId }, (error, comment) => {
    if (error) return res.json({ success: false, error });
    return res.json({ success: true });
  });
});
app.use('/api', router);

if(process.env.NODE_ENV === 'production'){
  app.use(express.static( 'client/public'))
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'public', 'index.html'))
  })
}

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));