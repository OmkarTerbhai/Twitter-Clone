import User from "../models/user.js";
import CrudRepository from "./crud-repository.js";

class UserRepository extends CrudRepository {
    constructor() {
        super(User);
    }

    async findByEmail(email) {
        const user = this.model.find({
            email: email
        });
        return user;
    }
}

export default UserRepository;