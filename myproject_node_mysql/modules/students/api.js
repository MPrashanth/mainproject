var express= require("express");
var router= express.Router();

router.use("/createaccount", function(req,res){
console.log("success");
res.send("students created successfully");
});

module.exports = router;

console.log("student api");

var studentmodel= require("./model");



// studentdata
// api.post("/user/studentsdata", function(req,res){
//     console.log(req.body);
//     console.log("studentsdata is working");

//     var input_id         = req.body.id;
//     var input_createdate = req.body.createdate;
//     var input_status     = req.body.status;
//     var input_name       = req.body.name;
//     var input_email      = req.body.email;
//     var input_phone      = req.body.gender;
//     var input_reference  = req.body.reference;
//     var input_course_id  = req.body.course_id;
//     var input_address    = req.body.address;
//     var input_photo      = req.body.photo;
//     var input_fee        = req.body.fee;
//     var input_joindate   = req.body.joindate;
    
//     var myObject = {
      
//         id          = input_id,
//         createdate  = input_createdate,
//         status      = input_status,
//         name        = input_name,
//         email       = input_email,
//         phone       = input_phone,
//         reference   = input_reference,
//         course_id   =input_course_id,
//         address     = input_address,
//         photo       = input_photo,
//         fee         = input_fee,
//         joindate    = input_joindate
        
//     }

//     var query = connection.query('INSERT INTO students SET ?', myObject , 
//     function (error, results, fields) {
//         if (error) {
            
//             console.log(error);
//             res.send(error);
//         }else{
//             console.log("students Success");//  For checking success or not in Gitbash
//             res.send("students success");// For checking success or not in Postman
//         }
        
//       });
    
// });

//Edit or Update

// app.post("/user/edit", function(req,res){

//     var input_id         = req.body.id;
//     var input_createdate = req.body.createdate;
//     var input_status     = req.body.status;
//     var input_name       = req.body.name;
//     var input_email      = req.body.email;
//     var input_phone      = req.body.gender;
//     var input_reference  = req.body.reference;
//     var input_course_id  = req.body.course_id;
//     var input_address    = req.body.address;
//     var input_photo      = req.body.photo;
//     var input_fee        = req.body.fee;
//     var input_joindate   = req.body.joindate;
    

// connection.query('UPDATE students SET createdate = ?, status = ?, name = ?, email = ?, gender = ?, reference = ?, course_id = ?, address = ?, photo = ?, fee = ?, joindate = ?,WHERE id = ? ', 
    
// [ input_id , input_createdate, input_status, input_name, input_email, input_phone, input_reference, input_course_id, input_address, input_photo, input_fee, input_joindate  ], 
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
//     var id = req.body.id;
//     var columns = ['createdate','status', 'name', 'email', 'gender','reference', 'course_id', 'address', 'photo', 'fee', 'joindate'];
// var query = connection.query('SELECT ?? FROM ?? WHERE id =?', 
// [columns, 'students', id], function (error, results, fields) {
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
//     var columns = ['createdate','status', 'name', 'email', 'gender','reference', 'course_id', 'address', 'photo', 'fee', 'joindate'];
//     var query = connection.query('SELECT ?? FROM ??', [columns, 'students'], 
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



// studentdata
// index.post("/user/studentdata", function(req,res){
//     console.log(req.body);
//     console.log("studentdata is working");
    // var input_id = req.body.id;
    // var input_createdate = req.body.createdate;
    // var input_status = req.body.status;
    // var input_name = req.body.name;
    // var input_email = req.body.email;
    // var input_phone = req.body.gender;
    // var input_reference = req.body.reference;
    // var input_course_id = req.body.course_id;
    // var input_address = req.body.address;
    // var input_photo = req.body.photo;
    // var input_fee = req.body.fee;
    // var input_joindate = req.body.joindate;
    
    // var dataObject = {
      
    //     id          = input_id,
    //     createdate  = input_createdate,
    //     status      = input_status,
    //     name        = input_name,
    //     email       = input_email,
    //     phone       = input_phone,
    //     reference   = input_reference,
    //     course_id   =input_course_id,
    //     address     = input_address,
    //     photo       = input_photo,
    //     fee         = input_fee,
    //     joindate    = input_joindate
        
    // }

    // var query = connection.query('INSERT INTO user SET ?', dataObject , 
    // function (error, results, fields) {
    //     if (error) {
            
    //         console.log(error);
    //         res.send(error);
    //     }
        
    //     else{
    //         console.log("student Success");//  For checking success or not in Gitbash
    //         res.send("student success");// For checking success or not in Postman
    //     }
        
    //   });
    
// });
// }
