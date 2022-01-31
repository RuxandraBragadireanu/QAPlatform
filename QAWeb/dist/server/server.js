"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const Express = require("express");
const Path = require("path");
const Passport = require("passport");
const common_1 = require("@tsed/common");
var session = require('express-session');
const bodyParser = require('body-parser');
const rootDir = Path.resolve(__dirname);
let Server = class Server extends common_1.ServerLoader {
    $onMountingMiddlewares() {
        this.use(bodyParser.json({ limit: '10mb' }), bodyParser.json({ type: 'application/vnd.api+json' }));
        this.use('/', Express.static(Path.resolve(`${__dirname}/../client`)));
        this.use(session({
            secret: 'secrettexthere',
            saveUninitialized: true,
            resave: true
        }));
        this.use(Passport.initialize());
        this.use(Passport.session());
        this.expressApp.get("/*", function (request, response, next) {
            if (!request.path.includes('/api')) {
                response.sendFile(Path.resolve(__dirname + '../../../dist/client/index.html'));
            }
            else {
                next();
            }
        });
    }
    $onError(error, request, response, next) {
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
};
Server = __decorate([
    common_1.ServerSettings({
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
], Server);
exports.Server = Server;
const server = new Server();
server.start();
//# sourceMappingURL=server.js.map