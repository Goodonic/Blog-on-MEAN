const express = require("express");
const router = express.Router()
const User = require("../models/user");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const config = require("../config/db");


router.post('/reg',
    (req, res) => {
        let newUser;
        newUser = new User({
            email: req.body.email ,
            login: req.body.login,
            name: req.body.name,
            password: req.body.password,
        });
        console.log(newUser);
        User.addUser(newUser,
            (err, user) => {
                if (err) {
                    res.json({success: false, msg: "The user has not been added."})
                } else {
                    res.json({success: true, msg: "The user has been added."})
                }
            })
    });

router.post('/auth',  (req, res) => {
    const login = req.body.login;
    const password = req.body.password;

    User.getUserByLogin(login, (err, user) => {
        if (err) throw err;
        if (!user) {
            return res.json({
                success: false,
                msg: "This user was not found."});
        }

        User.comparePass(password, user.password, (err, isMatch)=>{
            if (err) throw err;
            if (isMatch){
                const token = jwt.sign(user.toJSON(), config.secret, {expiresIn: 3600 * 24 * 7});
                res.json({ success: true,
                    token: "JWT"+token,
                    user: {
                        id: user._id,
                        name: user.name,
                        login: user.login,
                        email: user.email,
                    }})
            } else {
                return res.json({
                    success: false,
                    msg: "Password miss match."
                });
            }
        });
    });
});

router.get('/dashboard', passport.authenticate("jwt", {session: false}) ,(req, res) => {
    res.send("Dashboard");
});

module.exports = router;