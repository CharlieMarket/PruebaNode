const express = require('express');
//const bodyParser = require('body-parser');
const formidable = require('express-formidable');
const jade = require('jade');

const mongoose = require('mongoose');

const cloudinary = require('cloudinary');

const routes = require('./routes/index');
const app = express();

const port = process.env.PORT || 3000;

// app.get('/', (req, res) => {
// 	res.send('Hola Mundo').end();

// })
app.set('view engine', 'jade');
app.set('views', './views');

app.use(formidable( {
	encoding: 'utf-8',
	uploadDir: './static/image',
	keepExtensions: true, 
 	multiples: true,
} ));

app.use(express.static('./static')); // todo lo que esté en esta carpeta se verá en el navegador

//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended: true}))

app.use('/', routes);

cloudinary.config( {
	cloud_name: 'charliemarket',
	api_key: '846464852194874',
	api_secret: 'I5urpYrQfuEXpE-cVQ4YTExv3OE'
	})

const connectionString = 'mongodb://admin:admin@ds113871.mlab.com:13871/tallernode';

// Conectamos a la base en mongoose
mongoose.connect(connectionString, err => {
	if(err) {
		console.log(err);
	}
	else {
		console.log(`conectado a mongoose en ${connectionString}`);
	}

})

app.listen(port, err => {
	if(err) {
		console.log(err);
	}
	else {
		console.log(`server running on port ${port}`);
	}
});

