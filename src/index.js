import { listen } from "./framework/web/app.js";

listen(process.env.WEB_PORT || 3003);

process.on("uncaughtException", (error) => {
  console.log(error);
  process.exit(1);
});
