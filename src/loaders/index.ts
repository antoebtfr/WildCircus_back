import { Application } from "express";
import express from "./express";

export default (app: Application) => {
    express(app);
}