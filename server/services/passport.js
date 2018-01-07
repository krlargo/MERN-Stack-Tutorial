const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users'); // One argument means 'load from mongoose'

// Takes user and converts into unique id
passport.serializeUser((user, done) => {
  // Use mongoDB id since users won't necessarily have a googleID
  // id is placed in cookie
  done(null, user.id);
});

// Takes unique id and converts into corresponding user
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    },
    // Create new instance of user, storing its profile.id
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleID: profile.id }).then(existingUser => {
        if (existingUser) {
          // Record already exists
          done(null, existingUser); // param1: error, param2: found object
        } else {
          new User({ googleID: profile.id })
            .save()
            .then(newUser => done(null, newUser));
        }
      });
    }
  )
);
