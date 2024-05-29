const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const thirukkuralModel = require('./Models/thirukkural')

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://sasirekhavl22cse:0309@cluster0.fr2ir2g.mongodb.net/CRUD?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
    console.log("DB connected successfully")
})

app.get('/', (req, res) => {
    thirukkuralModel.find({})
        .then(thirukkurals => res.json(thirukkurals))
        .catch(err => res.json(err))
})

app.get('/getThirukkural/:id', (req, res) => {
    const id = req.params.id;
    thirukkuralModel.findById({ _id: id })
        .then(thirukkurals => res.json(thirukkurals))
        .catch(err => res.json(err))
})

app.delete("/deletethirukkural/:id", (req, res) => {
    const id = req.params.id;
    thirukkuralModel.findByIdAndDelete({ _id: id })
        .then(res => res.json(res))
        .catch(err => res.json(err))
})

app.post("/createthirukkural", (req, res) => {
    thirukkuralModel.create(req.body)
        .then(thirukkurals => res.json(res))
        .catch(err => res.json(err))
})

app.put("/updatethirukkural/:id", (req, res) => {
    const id = req.params.id;
    thirukkuralModel.findByIdAndUpdate({ _id: id }, { KuralEn: req.body.KuralEn, Kural: req.body.Kural, KuralVilakkam: req.body.KuralVilakkam })
        .then(thirukkurals => res.json(thirukkurals))
        .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log("Server is running");
})