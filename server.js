const express = require('express');
const hbs = require('hbs');
const fs = require('fs');
// const pos = require('./a.js');
var app = express();

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');

app.use((req, res, next) => {
  var now = new Date().toString();
  var log = `${now}: ${req.method} ${req.url}`;

  console.log(log);
  fs.appendFile('server.log', log + '\n', (err) => {
    if (err) {
      console.log('error here!');
    }
  });
  next();
});

// app.use((req, res, next) => {
//   res.render('maintenance.hbs');
// });

app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
  return text.toUpperCase();
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
//   res.render('home.hbs', {
//     pageTitle: 'Home Page',
//     welcomeMessage: 'Welcome to Wing Bites Imus'
//   });
});

app.get('/ordering', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'Ordering'
  });
});

// /bad - send back json with errorMessage
app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Unable to handle request'
  });
});

app.use(express.urlencoded({extended: false}));

app.post('/submit-order', (req, res) => {
  const uw = req.body.uw;
  const it = req.body.it;

  console.log(`uw ${uw}`);
  console.log(`it ${it}`);
  res.render('order.hbs', {
    uw_desc: 'Unli Wings',
    it_desc: 'Iced Tea',
    uw_qty:  uw,
    it_qty:  it,
    uw_price: parseInt(uw) * 208,
    it_price: parseInt(it) * 59
  });
});

// app.post('/print-order', (req, res, next) => {
//   const total = parseInt(req.body.uw_price) + parseInt(req.body.it_price)
//   var d = new Date().toISOString();
//   pos.print(
//     d,
//     `${req.body.uw_qty} ${req.body.uw_desc} ${req.body.uw_price}`,
//     `${req.body.it_qty} ${req.body.it_desc} ${req.body.it_price}`,
//     '',
//     `TOTAL    ${total}`
//     );
//     res.render('home.hbs', {
//       pageTitle: 'Home Page',
//       welcomeMessage: 'Welcome to Wing Bites Imus'
//     });
//     // res.end();
// });

const PORT = process.env.PORT || 3000;
// Start the server on port 3000
 app.listen(PORT , () => {
    console.log(`Our app is running on port ${ PORT }`);
});
