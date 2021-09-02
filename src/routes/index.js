const routes = require ("express").Router();
const multer = require ("multer");
const multerConfig = require("../config/multer");
const Cloud = require("../model/Cloud");

routes.get("/cloud", async (req, res) => {
    const cloud = await Cloud.find()
    return res.json(cloud);
});

routes.get("/cloud/:id", async (req, res) => {
    const cloud = await Cloud.findById(req.params.id)
    return res.json(cloud);
});

routes.post("/cloud", multer(multerConfig).single("file"), async (req, res) => {
    const { originalname: name, size, key, location: url = "" } = req.file
    const cloud = await Cloud.create({
        name,
        size,
        key,
        url 
    });
    return res.json(cloud);
});

routes.delete("/cloud/:id", async(req, res) => {
    const cloud = await Cloud.findById(req.params.id);
    await cloud.remove(); 
    return res.json({ message: "deletado com sucesso" })
} )

module.exports = routes; 