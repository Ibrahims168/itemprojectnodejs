const express = require("express");
const res = require("express/lib/response");
const router = express.Router()
const Item = require("../models/item.model")

router.get("/getItems", async (req,res) => {
    const items = await  Item.find({})
    res.send(items) 
 })

 router.post ("/addNewItem", async  (req, res) =>{
     const item = new Item(req.body)
     console.log(req.body);
     const response = await item.save()
     res.send(response)
 })

 module.exports = router 