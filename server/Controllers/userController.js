const User = require("../Models/user");


//insert new user
const addNewUser = async(req, res)=>{
    const {name, email, address} = req.body;

    const newUser = new User({
        name, 
        email,
        address
    });

    newUser.save().then(()=>{
        res.json("User Added");
    }).catch((err)=>{
        console.log(err);
    })

};

//read all the users
const viewAllUsers = async(req, res)=>{
    User.find().then((users) => {
        res.json(users)
    }).catch((err) => {
        console.log(err)
    })
};

//get user by id
const getUserById = async(req, res)=>{
    let userId = req.params.id;

    const user = await User.findById(userId)
    .then((user) => {
        res.status(200).send({status: "User fetched", user});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error in fetching user", error: err.message});
    })

};

///update details of user
const updateUser = async(req, res)=>{
    let userId = req.params.id;

    const { name, email, address } = req.body;

    const updateUser = {
        name,
        email,
        address
    }

    //check if the user to be updated exists
    const update = await User.findByIdAndUpdate(userId, updateUser)
    .then(() => {
        res.status(200).send({status: "User Updated"});
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status : "Error in updating user", error: err.message});
    })
};

//delete a user record 
const deleteUser = async(req, res)=>{
    let userId = req.params.id;

    await User.findByIdAndDelete(userId)
    .then(() => {
        res.status(200).send({status: "User Deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error in deleting user", error: err.message});
    })
};



exports.addNewUser = addNewUser;
exports.viewAllUsers = viewAllUsers;
exports.getUserById = getUserById;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;

