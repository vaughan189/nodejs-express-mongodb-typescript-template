/* eslint-disable no-console */
/* eslint-disable require-jsdoc */
import { configuration } from '../config';
import mongoose from 'mongoose';

class Database {
  public mongoUrl = configuration.DATABASE_URL || '';

  public connect(): void {
    mongoose.connect(this.mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    if (!mongoose.connection) console.log('Error connecting Mongo DB');
    else console.log('MongoDB connected successfully');
  }
}

export default new Database();
