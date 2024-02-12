import { getAllPosts, getOnePost, addOnePost, deleteOnePost, } from "./controllers.js";
import express from "express";
const app = express();

// Network settings
import "./database.js"
// import cors from "cors";
// app.use(cors());
// app.use(express.json());
// app.set("trust proxy", true);
const port = 8000

// Router
app
    .get("/", (req, res) => { res.send("Bienvenue !") })
    .get("/post", (req, res) => getAllPosts(req, res))
    .get("/post/:title", (req, res) => getOnePost(req, res))
    .post("/post", (req, res) => addOnePost(req, res))
    .delete("/post/:title", (req, res) => deleteOnePost(req, res))

app.listen(port, () => console.log("Listening on " + port))