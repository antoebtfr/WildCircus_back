import { Application } from "express";
import bodyParser = require("body-parser");
var cors = require("cors");

export default (app: Application) => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : false}))
    app.use(cors());
}