const express =require('express');
const router= express.Router();
const controller=require('./controller');

router.get('/users', controller.getUsers);
router.post('/createuser', controller.addUser);
router.post('/updateuser', controller.updateUser);
router.post('/deleteuser', controller.deleteUser);

module.exports= router;


//created routes and connect the API