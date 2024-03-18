const express = require("express");

const{
    addNewUser,
    viewAllUsers,
    getUserById,
    updateUser,
    deleteUser
} = require("../Controllers/userController");

const router = express.Router();    

//insert new user
router.post("/addUser", addNewUser);

//read all the users
router.get("/usersList", viewAllUsers);

//get user by id
router.get("/getUser/:id", getUserById);

//update details of user
router.put("/userUpdate/:id", updateUser);

//delete user
router.delete("/userDelete/:id", deleteUser);

module.exports = router;