const router = require("express").Router();

const Pin = require("../models/pin");

//create a pin
router.post("/", async (req,res) => {
    const newPin = new Pin(req.body);
    try {
        const savePin = await newPin.save();
        res.status(200).json(savedPin);
    } catch(err) {
        res.status(500).json(err)
    }
})

//get all pins
router.get("/", async (req,res)=> {
    try {
        const pins = await Pin.find();
        res.status(200).json(savedPin);
    } catch (err) {
        res.status(500).json(er)
    }
})

module.exports = router