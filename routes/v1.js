
const express = require('express');
const router = express.Router();

const JeansController = require('../controller/jeans.controller');

//shirt
router.get('/', (req, res) => {
    res.status(200).json({message:'server is ready to serve you'});
})
router.post('/add/jeans', JeansController.createJeans);
router.get('/get/jeans', JeansController.getOne);
router.get('/getAll/jeans', JeansController.getAll);



module.exports = router