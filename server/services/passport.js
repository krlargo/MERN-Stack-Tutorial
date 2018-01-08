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
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleID: profile.id });

      if (existingUser) {
        // Record already exists
        done(null, existingUser);
      } else {
        const newUser = await new User({ googleID: profile.id }).save();
        done(null, newUser);
      }
    }
  )
);
