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
router.post("/user", addNewUser);

//read all the users
router.get("/userslist", viewAllUsers);

//get user by id
router.get("/user/:id", getUserById);

//update details of user
router.put("/userupdate/:id", updateUser);

//delete user
router.delete("/userdelete/:id", deleteUser);