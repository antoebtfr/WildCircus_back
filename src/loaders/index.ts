import { Application } from "express";
import express from "./express";
import typeOrm from './typeorm'


export default async (app: Application) => {
    await express(app);
    console.log("express initialized")
    await typeOrm();
    console.log("typeOrm initialized")
}