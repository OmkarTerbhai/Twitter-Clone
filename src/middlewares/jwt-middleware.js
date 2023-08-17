import JWT from 'passport-jwt';
import UserRepository from '../repositories/user-repository.js';

const JwtStrategy = JWT.Strategy;
const userRepository = new UserRepository();
const ExtractJWT = JWT.ExtractJwt;

const opts = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'twitter-secret'
}

export const passportAuth = (passport) => {
    console.log("Initialized middleware")
    passport.use(new JwtStrategy(opts, async(jwt_payload, done) => {
        console.log("Here in use callback");
        const user = await userRepository.findByEmail(jwt_payload.email);
        console.log("User in JWT middleware: ", user);
        console.log("User in middleware: ", user);
        if(!user) {
            done(null,  false);
        }
        else {
            done(null, user);
        }
    }));
}
