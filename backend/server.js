import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import connection from "./connection.js";

connection.sync();

const app = express();
