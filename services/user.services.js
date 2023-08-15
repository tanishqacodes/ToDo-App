const userModel = require("../model/user.model");



class UserService{
    static async registerUser(email,password){
        try{
            const creatUser = new userModel({email,password});

            return await creatUser.save();
        }
        catch(error){
            throw error;
        }
    }
}

module.exports = UserService;