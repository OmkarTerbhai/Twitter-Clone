import JWT from 'passport-jwt';
import User from '../models/user.js'

const JwtStrategy = JWT.Strategy;

const ExtractJWT = JWT.ExtractJwt;

const opts = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'twitter_secret'
}

export const passportAuth = (passport) => {
    console.log("Initialized middleware")
    passport.use(new JwtStrategy(opts, async(jwt_payload, done) => {
        
        const user = await User.findById(jwt_payload.id);
        console.log(user);
        console.log("User in middleware: ", user);
        if(!user) {
            done(null, false);
        }
        else {
            done(null, user);
        }
    }));
}
