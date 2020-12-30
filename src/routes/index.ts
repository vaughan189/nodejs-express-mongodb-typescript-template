/* eslint-disable require-jsdoc */
import express, { Request, Response } from 'express';
import { ContactController } from '../controllers/Contact';

export class Routes {
  public contactController: ContactController = new ContactController();

  public routes(app: express.Application): void {
    app.route('/').get((req: Request, res: Response) => {
      res.status(200).send({
        message: 'API Working',
      });
    });

    app
      .route('/contact')
      .get(this.contactController.getContacts)
      .post(this.contactController.addNewContact);

    app
      .route('/contact/:contactId')
      .get(this.contactController.getContactWithID)
      .put(this.contactController.updateContact)
      .delete(this.contactController.deleteContact);
  }
}
