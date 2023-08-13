import passport from 'passport';

export const authenticate = (req, res, next) => {
    passport.authenticate('jwt', (error, user) => {
        if(error) {
            next(error);
        }
 
        if(!user) {
            return res.status(404).json({
                message: "User not found"
            })
        }
        req.user = user;
        next();
    })(req, res, next);
}