const express = require('express');
//const animals = require('./routes/animals');
const expressHandlebars = require('express-handlebars');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

const hbs = expressHandlebars.create({
  defaultLayout: 'main'
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//app.use("/species", animals);

app.use(express.static(__dirname + '/public'));

app.listen(3000, () => {
  console.log('Hey.');
});