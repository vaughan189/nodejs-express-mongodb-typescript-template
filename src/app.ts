/* eslint-disable require-jsdoc */
import { Routes } from './routes';
import bodyParser from 'body-parser';
import { configuration } from './config';
import express from 'express';
import mongoose from 'mongoose';

class App {
  public app: express.Application;
  public routes: Routes = new Routes();
  public mongoUrl = configuration.DATABASE_URL || '';

  constructor() {
    this.app = express();
    this.config();
    this.routes.routes(this.app);
    this.mongoSetup();
  }

  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

  private mongoSetup(): void {
    mongoose.Promise = global.Promise;
    mongoose.connect(this.mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }
}

export default new App().app;
