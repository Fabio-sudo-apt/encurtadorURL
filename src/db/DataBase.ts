import mongoose from "mongoose";


class DataBase{
  connect(){
    return mongoose.connect(
      "mongodb+srv://root:1190@cluster0.grmwt7y.mongodb.net/Lick", () => {
        console.log("MongoDB connect server");
      }
    );
  }
}

export default new DataBase;
