const express = require("express");
const Router = express.Router();
const mysqlConnection = require("../connection");

//get all people from table
Router.get("/", (req, res) =>{
    mysqlConnection.query("SELECT * from people", (err, rows, fields)=>{
        if(!err)
        {
            res.send(rows);
        }
        else
        {
            console.log(err);
        }
    })
});

//get an people from table
Router.get("/:id", (req, res) =>{
    mysqlConnection.query("SELECT * from people WHERE id = ?",[req.params.id],(err, rows, fields)=>{
        if(!err)
        {
            res.send(rows);
        }
        else
        {
            console.log(err);
        }
    })
});


//Delete an people from table
Router.delete("/:id", (req, res) =>{
    mysqlConnection.query("DELETE from people WHERE id = ?",[req.params.id],(err, rows, fields)=>{
        if(!err)
        {
            res.send("deleted successfully");
        }
        else
        {
            console.log(err);
        }
    })
});



//insert an people in table
Router.post("/", (req, res) =>{
    let pop = req.body;
    var sql = "SET @id = ?;SET @name = ?;SET @email = ?;SET @age = ?;SET @mobileNo = ?;\
    CALL `peopleAddOrEdit`();";
    mysqlConnection.query(sql,[pop.id,pop.name,pop.email,pop.age,pop.mobileNo],(err, rows, fields)=>{
        if(!err)
        {
           rows.forEach(element =>{
               if(element.constructor == Array)
                res.send("Inserted Peaples id : ");
           });
        }
        else
        {
            console.log(err);
        }
    })
});
module.exports = Router;