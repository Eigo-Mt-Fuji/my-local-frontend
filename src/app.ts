import "reflect-metadata";
import express from "express";

import * as bodyParser from "body-parser";
import compression from "compression";
import expressValidator from "express-validator";
import lusca from "lusca";
import { InversifyExpressServer } from "inversify-express-utils";
import { Container } from "inversify";
import "./controllers/smallworld";

import errorHandler from "errorhandler";

const app = express();

const port: number = +process.env.PORT || 3000;
app.use(express.static("public"));

app.set("port", port);
app.set("view engine", "ejs");

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(compression());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());
app.use(lusca.xframe("SAMEORIGIN"));
app.use(lusca.xssProtection(true));

app.use(errorHandler());

// load everything needed to the Container
const container = new Container();

// start the server
const server = new InversifyExpressServer(container, undefined,  { rootPath: "/" }, app);

server.setConfig((app) => {});

export default server.build();
