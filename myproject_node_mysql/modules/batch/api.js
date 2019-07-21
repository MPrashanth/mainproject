var express= require("express");
var router= express.Router();


var con=require("./../../connection");


router.get("/createaccount", function(req,res){
console.log("success");
res.send("batch created successfully");
});



console.log("batch api");

var batchmodel= require("./model");





// batchdata

// router.post("/user/batchdata", function(req,res){
//     console.log(req.body);
//     console.log("batchdata is working");

//     var input_batchid       = req.body.batchid;
//     var input_create        = req.body.create;
//     var input_status        = req.body.status;
//     var input_startdate     = req.body.startdate;
//     var input_enddate       = req.body.enddate;
//     var input_time          = req.body.time;
//     var input_students_ids   = req.body.students_ids;

//     var batchData = {
//                 batchid : input_batchid,
//                 create   : input_create,
//                 status     : input_status,
//                 startdate  :input_startdate,
//                 enddate    : input_enddate,
//                 time       : input_time,
//                 students_ids : input_students_ids  
//             }

//     var query = con.query('INSERT INTO batch SET ?', batchData , 
//     function (error, results, fields) {
//         if (error) {
            
//             console.log(error);
//             res.send(error);
//         }else{
//             console.log("batch Success");//  For checking success or not in Gitbash
//             res.send("batch success");// For checking success or not in Postman
//         }
        
//       });
    
//  });

//Edit or Update


// router.post("/user/edit", function(req,res){

//     var input_batchid       = req.body.batchid;
//     var input_create        = req.body.create;
//     var input_status        = req.body.status;
//     var input_startdate     = req.body.startdate;
//     var input_enddate       = req.body.enddate;
//     var input_time          = req.body.time;
//     var input_students_ids   = req.body.students_ids;

// con.query('UPDATE batch SET batchid = ?, create = ?, status = ?, startdate = ?, enddate = ?, time = ? WHERE students_ids = ? ', 
    
// [ input_batchid , input_create, input_status, input_startdate, input_enddate, input_time, input_students_ids ], 
//     function (error, results, fields) {
//         if (error) {throw error;}
//         else{
//             res.send("update successfully");
            
//         }
       
//       });
    
// });
//End Edit

//View

// router.post("/user/view", function(req,res){
//     var students_ids = req.body.student_ids;
//     var columns = ['batchid', 'create','status','startdate','enddate','time' ];
// var query = con.query('SELECT ?? FROM ?? WHERE student_id=?', 
// [columns, 'batch', studentid], function (error, results, fields) {
//   if (error) {throw error;}
//   else{
//       console.log(results);
//     res.send(results[0]);
//   }

// });
    
// });

//End View

//ViewAll

// router.get("/user/viewall", function(req,res){
//     var columns = ['batchid', 'create','status','startdate','enddate','time' ];
// var query = con.query('SELECT ?? FROM ??', [columns, 'batch'], 
// function (error, results, fields) {
//   if (error) {throw error;}
//   else{
//     res.send(results);
//   }
 
// });
    
// });

// End ViewAll
// }

module.exports = router;