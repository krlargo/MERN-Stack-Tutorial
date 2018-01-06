const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users'); // One argument means 'load from mongoose'

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    // Create new instance of user, storing its profile.id
    (accessToken, refreshToken, profile, done) => {
      new User({ googleID: profile.id }).save();
    }
  )
);
