const Product = require('../models/product')
const cloudinary = require('cloudinary');

exports.init = (req, res) => {
	//res.send('hola desde controladores').end();
	//res.render('index');
	// res.sendfile para html estático
	Product.find( (err, response) => {
		if(err) {
			console.log(err)
		}
		else {
			console.log()
			res.render('index', {producto: response});
		}
	});

}

exports.admin = (req, res) => {
	res.render('admin');  // archivo admin de la carpeta views
}

exports.create = (req, res) => {
	
	console.log('req.fields', req.fields);
	console.log('req.files', req.files);

	cloudinary.uploader.upload(req.files.fileimage.path, function(result) { 

		let data = new Product({
			name: req.fields.prodName,
			price: req.fields.price,
			description: req.fields.description,
			date: new Date(),
			img: result.url,
		});
		console.log('data: ', data);
		console.log(result)
	  	data.save( (err, response) => {
			if(err) {
				console.log(err)
			}
			else {
				res.redirect('/');
			}
		});

	});

}