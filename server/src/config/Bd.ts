import mongoose from "mongoose";
import { CLUSTER } from "../config";
import { error } from "console";

mongoose
  .connect(CLUSTER)
  .then(() => {
    console.log("connexion a la base de donnee reussie");
  })
  .catch((error) => {
    console.log(error);
  });

  export default mongoose
