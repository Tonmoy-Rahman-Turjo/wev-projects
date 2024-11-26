//mongoose server connect  requer
import mongoose from 'mongoose';
import config from './app/config';
import app from './app';
import { error } from 'console';
// import app from "./app"
// import app  from './app'
// const mongoose = require('mongoose');
async function main() {
  try {
    await mongoose.connect(config.database_url as string);

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled

    //express app
    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (error) {
    console.error(error);
  }
}
main();
