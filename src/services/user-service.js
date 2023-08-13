import logger from "../config/logger-config.js";
import User from "../models/user.js";
import UserRepository from "../repositories/user-repository.js";

class UserService {
    constructor() {
        this.userRepository = new UserRepository();
    }

    async signUp(data) {
        try {
            const user = await this.userRepository.create(data);
            return user;
        } catch (error) {
            logger.info("Error while signing up" + error);
            throw error;
        }
    }

    async signIn(data) {
        try {
            const user = await this.userRepository.findByEmail(data.email);
            if(user[0]) {
                //User exists, check password
                if(!user[0].comparePassword(data.password)) {
                    throw new Error('Wrong Password');
                }
            }
            else {
                throw {
                    message: "User does not exist"
                }
            }
            const token = user[0].generateJWT();
            return token;
        } catch (error) {
            throw new Error(error.message);
        }
    }
}

export default UserService;