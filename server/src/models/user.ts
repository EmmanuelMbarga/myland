import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

interface Iuser {
  email: string;
  password: string;
}

const userSchema = new Schema<Iuser>(
  {
    email: {
      type: String,
      trim: true,
      required:true,
      maxlength: 50,
      minlength: 13,
      unique: true,
    },
    password: {
      type: String,
      trim: true,
      required:true,
      maxlength: 1020,
      minlength: 5,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

    //--------------------code servant pour crypter le mot de passe ----------------------------------------
userSchema.pre('save',async function (next) {
    if(!this.isModified("password")) return next()
    const salt=await bcrypt.genSalt()
    this.password=await bcrypt.hash(this.password,salt)
    next()
})


//---------------------code servant pour valider l'authentification ----------------------------------------
userSchema.statics.login=async function(email,password){
  const utilisateur=await this.findOne({email})
  if (utilisateur) {
      const auth=await bcrypt.compare(password,utilisateur.password)
      if (auth) {
          return utilisateur
      }else{
          throw new Error('mot de passe incorrect')
      }
  }else{
      throw new Error('email incorrect')
  }
}

const userModel= model<Iuser>('Utilisateur',userSchema)


export default userModel