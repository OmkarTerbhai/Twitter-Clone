import User from "../models/user.js";
import CrudRepository from "./crud-repository.js";

class UserRepository extends CrudRepository {
    constructor() {
        super(User);
    }

    async findByEmail(email) {
        
        const user = await this.model.find({
            email: email
        });
        console.log(user);
        return user;
    }
}

export default UserRepository;