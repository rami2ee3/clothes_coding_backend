import "express-async-errors";
import "dotenv/config";

import { createServer } from "http";
import bodyParser from "body-parser";
import camelcaseKeys from "camelcase-keys";
import cors from "cors";
import Express from "express";

import statusCode from "./enums/StatusCode.js";
import memberRouter from "./router/memberRouter.js";
import { makeResponse } from "./utils/CommonUtils.js";

export const app = new Express();
const httpServer = createServer(app);
app.use(bodyParser.json(), (req, res, next) => {
  req.body = camelcaseKeys(req.body);
  next();
});


app.use(cors({ origin: true, credentials: true }));
app.use("/member", memberRouter);

// 404 Error Handler
app.use((req, res) => {
  return res
    .status(statusCode.NOT_FOUND)
    .send(makeResponse(404, "not found", "요청하신 URL을 찾을 수 없습니다.", {}));
});

export const listen = (port) => {
  httpServer.listen(port);
  console.log(`App_is_listening_${port}`);
};
