/**
 *   Created by Nicolas Marchal on 20/03/2019
 *   Copyright © 2019 NMCorp. All rights reserved.
 */

import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as morgan from 'morgan';

export default class App {
    public app: express.Application;

    constructor() {
      this.app = express();
      this.setUpApp();
    }

    private setUpApp(): void {
      this.app.use(bodyParser.json());
      this.app.use(morgan('combined'));
    }

    public start(): void {
      this.app.listen(3000, () => {
        // console.log('express');
      });
    }
}
