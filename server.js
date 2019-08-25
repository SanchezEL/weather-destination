const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')
const mongoose = require('mongoose')
const Auth = require('./models/weather')
// const path = require('path')
const jwt = require('jsonwebtoken')
const router = express.Router()
const AuthController = require('./controllers/controllers')


const app = express();
// const router = express.Router();

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
  console.log('Authscuseme', req)
  Auth.find((err, city) => {
    console.log(city)
    if (err) return res.json({ error: err });
    return res.json({data: city });
  });
});
router.get('/user', (req,res) => {
  Auth.find((err, city))
})

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
  Auth.remove({ _id: cityId }, (error, comment) => {
    if (error) return res.json({ success: false, error });
    return res.json({ success: true });
  });
});
router.post('/signup', (req, res) => {
  AuthController.SignUp(req.body)
    .then(() => res.send('User created successfully'))
    .catch((err) => res.send(err.message))
})
router.post('/login', (req, res) => {
  // contents of login route
  console.log('server /login', AuthController.Login(req.body))
  AuthController.Login(req.body)
    .then(result => {
      console.log('snoozer',result)
      if(!result) res.status(404).send('No user')
      const token  = jwt.sign({ ...result }, "secret")
      return res.send(token)
    })
})
// function isAuthenticated(req, res, next) {
//   console.log('nah nah yo', req.cookies)
//   if (!req.cookies.id_token) {
//     return res.status(401).send('Unauthorized')
//   }
//   const payload = jwt.verify(req.cookies.id_token, "secret")
//   console.log('isthisit',req)
//   req.user = payload._doc
//   return next()
// }

router.put('/user', (req,res) =>{
  console.log('putting user name', req.body)
  AuthController.UpdateUser(req.body.cities, req.body._id)
    .then(() => res.send('user updated'))
})
app.use('/api', router);

// if(process.env.NODE_ENV === 'production'){
//   app.use(express.static( 'client/public'))
//   app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'client', 'public', 'index.html'))
//   })
// }

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));