var express= require("express");
var router= express.Router();

router.use("/createaccount", function(req,res){
console.log("success");
res.send("course created successfully");
});

module.exports = router;

console.log("course api");

var coursemodel= require("./model");




// coursedata
// api.post("/user/coursedata", function(req,res){
//     console.log(req.body);
//     console.log("coursedata is working");

//     var input_id         = req.body.id;
//     var input_createdate = req.body.createdate;
//     var input_status     = req.body.status;
//     var input_name       = req.body.name;
    

//     var myObject = {
//             id          = input_id,
//             createdate  = input_createdate,
//             status      = input_status,
//             name        = input_name,
               
//             }

//     var query = connection.query('INSERT INTO courses SET ?', myObject , 
//     function (error, results, fields) {
//         if (error) {
            
//             console.log(error);
//             res.send(error);
//         }else{
//             console.log("courses Success");//  For checking success or not in Gitbash
//             res.send("courses success");// For checking success or not in Postman
//         }
        
//       });
    
// });

//Edit or Update

// app.post("/user/edit", function(req,res){

//     var input_id         = req.body.id;
//     var input_createdate = req.body.createdate;
//     var input_status     = req.body.status;
//     var input_name       = req.body.name;
    

// connection.query('UPDATE courses SET id = ?, createdate = ?, status = ? WHERE name = ? ', 
    
// [ input_id , input_createdate, input_status, input_name], 
//     function (error, results, fields) {
//         if (error) {throw error;}
//         else{
//             res.send("update successfully");
            
//         }
       
//       });
    
// });

//End Edit

//View

// app.post("/user/view", function(req,res){
//     var name = req.body.name;
//     var columns = ['id', 'createdate','status' ];
// var query = connection.query('SELECT ?? FROM ?? WHERE name =?', 
// [columns, 'courses', name], function (error, results, fields) {
//   if (error) {throw error;}
//   else{
//       console.log(results);
//     res.send(results[0]);
//   }

// });
    
// });

//End View

//ViewAll

// app.get("/user/viewall", function(req,res){
//     var columns = ['id', 'createdate','status' ];
// var query = connection.query('SELECT ?? FROM ??', [columns, 'courses'], 
// function (error, results, fields) {
//   if (error) {throw error;}
//   else{
//     res.send(results);
//   }
 
// });
    
// });

//End ViewAll











































// var config= require("../../config");
// module.exports= function(index, express){
//     var api= express.Router();



//coursedata
// api.post("/user/coursedata", function(req,res){
//     console.log(req.body);
//     console.log("coursedata is working");

    // var input_id = req.body.id;
    // var input_createdate = req.body.createdate;
    // var input_status = req.body.status;
    // var input_name = req.body.name;
    
    
    // var dataObject = {
      
    //     id          = input_id,
    //     createdate  = input_createdate,
    //     status      = input_status,
    //     name        = input_name,
        
        
    // }

    // var query = connection.query('INSERT INTO user SET ?', dataObject , 
    // function (error, results, fields) {
    //     if (error) {
            
    //         console.log(error);
    //         res.send(error);
    //     }
        
    //     else{
    //         console.log("course Success");//  For checking success or not in Gitbash
    //         res.send("course success");// For checking success or not in Postman
    //     }
        
    //   });
    
// });
// }