require('dotenv').config();
const Conmongoose = require('mongoose');
const maxRetryAttempts = 3;
const retryDelayMs = 3000;
let retryAttempts = 0;
const { DB_NAME } = require('../config/index');
  function connectWithRetry() {
    Conmongoose.connect(`mongodb://127.0.0.1:27017/${DB_NAME}`)
      .then(() => {
        console.log('MongoDB connected successfully');
      })
      .catch((error) => {
        console.error(`MongoDB connection error: ${error.message}`);
        retryAttempts++;
        if (retryAttempts < maxRetryAttempts) {
          console.log(`Retrying connection attempt ${retryAttempts} in ${retryDelayMs} ms`);
          setTimeout(connectWithRetry, retryDelayMs);
        } else {
          console.error(`Max retry attempts (${maxRetryAttempts}) reached. Exiting...`);
          process.exit(1);
        }
      });
  } 
  connectWithRetry();