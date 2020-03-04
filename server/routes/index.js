var express = require('express');
var router = express.Router();


/*** database connnection***/
var mysql = require('mysql2');



const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'mern'
});
if(connection){
	console.log('connecting mysql');
}
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


 /** save transaction **/
router.post('/save', function(req, res, next) {
       console.log('err');
  
	  var type = req.body.type;
  var amount = req.body.amount;
  var description = req.body.description;
  // console.log(type);
  // console.log("insert into transactions ('type', 'amount', 'description') VALUES (${type},${amount},${description})");

connection.query(
  `insert into transactions (type, amount, description) VALUES ('${type}',${amount},'${description}')`,
  function(err, results, fields) {
    //  console.log(err);
    // console.log(results); // results contains rows returned by server
    //console.log(fields); // fields contains extra meta data about results, if available
    if(err){
    return res.status(400).json({ error: "Error ocured!" });
    }else{
    return res.status(200).json({ success: "Transaction Added successfully!" });	
    }
  }
);

});

/** get transaction **/

router.get('/all-transaction', function(req, res, next) {
connection.query(
  'SELECT * FROM `transactions` order by date DESC',
  function(err, results, fields) {
  	console.log(results);
  	if(err){
    return res.status(400).json({ error: "Error ocured!" ,data:""});
    }else{
    return res.status(200).json({ success: "successfully!" ,data: results});	
    }
     // results contains rows returned by server
    //console.log(fields); // fields contains extra meta data about results, if available
  }
);
});
module.exports = router;
