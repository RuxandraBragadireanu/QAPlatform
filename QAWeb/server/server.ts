import * as Express from 'express';
import * as Path from 'path';
import * as Passport from "passport";
import {IServerLifecycle, ServerLoader, ServerSettings} from '@tsed/common';

var session = require('express-session');
const bodyParser = require('body-parser');

const rootDir = Path.resolve(__dirname);

@ServerSettings({
  port: 3000,
  rootDir: rootDir,
  acceptMimes: ['application/json'],
  mount: {
    '/': [`${rootDir}/app/**/**.js`]
  },
  logger: {
    logRequest: false
  }
})
export class Server extends ServerLoader implements IServerLifecycle {

  public $onMountingMiddlewares(): void | Promise<any> {
    this.use(bodyParser.json({limit: '10mb'}), bodyParser.json({ type: 'application/vnd.api+json' }));
    this.use('/', Express.static(Path.resolve(`${__dirname}/../client`)));

    // required for passport session
    this.use(session({
      secret: 'secrettexthere',
      saveUninitialized: true,
      resave: true
    }));

// Init passport authentication
    this.use(Passport.initialize());
// persistent login sessions
    this.use(Passport.session());

    this.expressApp.get("/*", function(request, response, next){
      if (!request.path.includes('/api')) {
        response.sendFile(Path.resolve(__dirname + '../../../dist/client/index.html'));
      } else {
        next();
      }
    });

  }

  public $onError(error: any, request: Express.Request, response: Express.Response, next: Function): void {
    if (response.headersSent) {
      return next(error);
    }
    if (typeof error === 'string') {
      response.status(404).send(error);
      return next();
    }
    if (error.name === 'CastError' || error.name === 'ObjectID' || error.name === 'ValidationError') {
      response.status(400).send('Bad Request');
      return next();
    }
    response.status(error.status || 500).send('Internal Error');
    return next();
  }

}

const server = new Server();
server.start();
