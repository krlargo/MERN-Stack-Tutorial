// How we import through server-side since node doesn't support 'import'
const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

const app = express();

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    accessToken => {
      console.log(accessToken);
    }
  )
);

// Look at underlying environment and see if a PORT is declared
const PORT = process.env.PORT || 5000; // 5000 is default value in case of null
// Tells NODE which port to listen for
app.listen(PORT);
