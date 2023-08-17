import passport from 'passport';

export const authenticate = (req, res, next) => {
    passport.authenticate('jwt', (error, user) => {
        console.log("here is authenticate");
        if(error) {
            console.log(error);
            next(error);
        }
        console.log("User value: ", user);
        if(!user) {
            return res.status(404).json({
                message: "User not found"
            })
        }
        req.user = user;
        next();
    })(req, res, next);
}