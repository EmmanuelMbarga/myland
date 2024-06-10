import express, { json, urlencoded,Response,Request } from "express";
import { PORT } from "./config";
import "./../dist/config/Bd";
import { route } from "./routes/user";
import cors from "cors";
import { routes1 } from "./routes/article1";

// import cookieParser from "cookie-parser";

const app = express();
const routeUser = route;
const routerArticle=routes1

//cors options
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["POST", "GET", "PUT", "PATCH"],
  })
);
// middlewares
app.use(urlencoded({ extended: true }));
app.use(json());

//verification du token

//routes API
app.use("/api/v1/user", routeUser);
app.use("/api/v2/article", routerArticle);

// Serve static files from the "public" directory
app.use(express.static("public"));

app.listen(PORT, () => {
  console.log("le serveur fonctionne au port : ", PORT);
});
