var express=require("express");
var mysql=require("mysql");

var router = express();

router.get("/emps", (request,responce)=>
{
    responce.send("Select method");
})
router.put("/emps", (request,responce)=>
{
    responce.send("Select method");
})
router.put("/emps", (request,responce)=>
{
    responce.send("Select 2");
})
router.put("/emps", (request,responce)=>
{
    responce.send("Select 3");
})


router.listen(9898,()=>
{
    console.log("Server started..");
})
