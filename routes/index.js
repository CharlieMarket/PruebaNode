const express = require('express');
const router = express.Router();
const mainController = require('../controllers/main-controller');

router.get('/', mainController.init);

//router.get('/', (req, res) => {
//	res.send('Hey ruta').end();
//});

router.get('/admin', mainController.admin);

router.post('/create', mainController.create);


module.exports = router;