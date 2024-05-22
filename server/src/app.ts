import express,{json,urlencoded} from "express";
import { PORT } from "./config";
import './../dist/config/Bd'
import { route } from "./routes/user";



const app = express();
const routeUser=route
// middlewares 
app.use(urlencoded({extended:true}))
app.use(json())

//routes API
app.use("/api/v1/user",routeUser)

app.use("/public",express.static('public'))



app.listen(PORT, () => {
  console.log("le serveur fonctionne au port : ", PORT);
});
