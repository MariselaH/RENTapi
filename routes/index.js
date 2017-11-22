var express = require('express');
var router = express.Router();

var multer = require('multer');
var upload = multer();

var modelos = require('../models/Casa'); //Para que se creen los modelos
var modeloArrendador = require('../models/Arrendador' );


var Ctrl = require('../Controllers/Ctrl');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});





//Funcion que al entrar en el navegador con localhost:3000/libros manda a llamar a la funcion
//getLibros que se encuentra definida en el controlador LibrosCtrl
router.route('/casas')
		.get(Ctrl.getCasas)
		.post(upload.array(),Ctrl.addCasas);

//Funcion que al entrar al navegador con localhost:3000/libros/:(el id de algun libro) nos muestra
//solo la informacion del libro que esta especificado en la funcion getById
router.route('/casas/:id')
	//	.get(Ctrl.getCasaById)
		.put(upload.array(),Ctrl.updateCasa) //mandar obj json con lo que quiero actualizar, se va a actualizar el id que se esta enviando en la ruta
		.delete(Ctrl.deleteCasa); //borrar el id que se esta enviando en la ruta


router.route('/arrendadores')
		.get(Ctrl.getArrendadores)//devolver todos los autores
		.post(upload.array(),Ctrl.addArrendador);

 router.route('/arrendadores/:nombre')
		//.get(Ctrl.getByArrendador) //devuelve todos los libros de ese autor
		//.post(upload.array(),Ctrl.addArrendador);
		.put(upload.array(),Ctrl.updateArrendador); //actualizar nombre de autor en los libros
		//eliminar libros del autor

router.route('/arrendadores/:id/casas')
		.get(Ctrl.getByArrendador);
		//Utilizar git (comandos basicos), crear una cuenta en github y subir tarea1; no subir los node_modules
		//y hacer un README.md, enviar por classroom el link de github */
router.route('/arrendadores/:id')
		.delete(Ctrl.deleteArrendador); 

		module.exports = router; 


