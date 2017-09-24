
const db = require("../models");
const capitalize = require('../utils/string_utils').capitalize;
const path = require("path");


module.exports = function(app) {

	// Express RESTLESS:
	// based on Flask-restless-
	//  http://flask-restless.readthedocs.io/en/stable/quickstart.html

	// // Automated GET route for retrieving all items of a certain model
  //   app.get("/api/:model_name", function(req, res) {
  //       // TODO: take filters as GET params like '/api/:model_name?price=20' and insert into a 'where' clause
  //       let model_name = req.params.model_name;
  //         let sequelize_model_name = capitalize(model_name);
  //       db[sequelize_model_name].findAll({})
  //         .then(function(results) {
  //           res.json(results);
  //         });
  //     });

     }