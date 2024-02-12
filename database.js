import mongoose from "mongoose";
const url = "mongodb+srv://nono5g:uR2JqJYrAXHpJUKM@cluster.04nxsac.mongodb.net/?retryWrites=true&w=majority";

mongoose
    .connect(url)
    .then((mongo) => console.log("Connected to MongoDB :", mongo.connection.host))
    .catch((err) => console.log("Failed to connect to MongoDB", err));
