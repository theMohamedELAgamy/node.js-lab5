let emp=require('../models/db_driver')
module.exports={
     all(req,res){
       
         emp.find({}, function(err, result) {
            if (err) {
              console.log(err);
            } else {
              res.json(result);
              console.log(result)
            }
          });
    },
    create_emp(req,res){
        let employee=req.body
        emp.create(employee,function(err,result){
            if (err) {
                console.log(err);
              } else {
                res.json(result);
                console.log(result)
              }

        })
        
    },
    delete_emp(req,res){
        emp.deleteOne({
            "username":req.body.username
        }, function(err, result) {
            if (err) {
              console.log(err);
            } else {
              res.json(result);
              console.log(result)
            }
          })
        

    },
    update_emp(req,res){
        emp.updateOne({"username":req.body.username},{
             "phone":req.body.phone,
             "first_name":req.body.first_name,
             "last_name":req.body.last_name,
             "email":req.body.email
        },function(err, result) {
            if (err) {
              console.log(err);
            } else {
              res.json(result);
              console.log(result)
            }
          })

    }
}