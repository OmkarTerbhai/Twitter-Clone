import { ObjectId } from "bson";
import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String
    },
    bio: {
        type: String,
    },
    name: {
        type: String
    }
});

userSchema.pre('save', function(next) {
    const user = this;
    const salt = bcrypt.genSaltSync(8);
    const encryptedPassword = bcrypt.hashSync(user.password, salt);
    user.password = encryptedPassword;
    next();
});

userSchema.methods.comparePassword = function compare(password) {
    return bcrypt.compareSync(password, this.password);
}

userSchema.methods.generateJWT = function generate() {
    return jwt.sign({
        id: this._id,
        email: this.email,
    }, 'twitter-secret', {
        expiresIn: '2h'
    });
}

const User = mongoose.model('User', userSchema);

export default User;