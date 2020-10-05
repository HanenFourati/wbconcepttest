const express = require("express");
const bodyParser = require("body-parser");
const { MongoClient, ObjectID } = require("mongodb");
const assert = require("assert");

const app = express();
app.use(bodyParser.json());

const mongoUrl = "mongodb://localhost:27017";
const dataBase = "map";

MongoClient.connect(
  mongoUrl,
  { useNewUrlParser: true },
  (err, client) => {
    assert.equal(err, null, "data base erreur");
    const db = client.db(dataBase);
// handeling clients
    app.get("/clients", (req, res) => {
      db.collection("client")
        .find()
        .toArray((err, data) => {
          if (err) res.send("cant fecth clients");
          else res.send(data);
        });
    });
    app.post("/clients", (req, res) => {
      let newClient = req.body;
      db.collection("client").insertOne(newClient, (err, data) => {
        if (err) res.send("cant add client");
        else res.send(data);
      });
    });
    app.put("/clients/:id", (req, res) => {
      let editedClient = req.body;
      let id = ObjectID(req.params.id);
      db.collection("client").findOneAndUpdate(
        { _id: id },
        { $set: { ...editedClient } },
        (err, data) => {
          if (err) res.send("cant edit client");
          else res.send(data);
        }
      );
    });
    app.delete("/clients/:id", (req, res) => {
      let id = ObjectID(req.params.id);
      db.collection("client").findOneAndDelete({ _id: id }, (err, data) => {
        if (err) res.send("cant delete client");
        else res.send(data);
      });
    });
//handeling Tasks
app.get("/home", (req, res) => {
  db.collection("Tasks")
    .find()
    .toArray((err, data) => {
      if (err) res.send("cant fecth tasks");
      else res.send(data);
    });
});
// handeling buildings
    app.get("/clients/:id/buildings", (req, res) => {
      let cltid = req.params.id;
      db.collection("building")
        .find({client_Id: cltid})
        .toArray((err, data) => {
          if (err) res.send("cant fecth buildings");
          else res.send(data);
        });
    });
    app.post("/clients/:id/buildings", (req, res) => {
      let newBuilding = req.body;
      db.collection("building").insertOne(newBuilding, (err, data) => {
        if (err) res.send("cant add building");
        else res.send(data);
      });
    });
    app.put("/clients/:id/buildings/edit-building/:id", (req, res) => {
      let editedBuilding = req.body;
      let id = ObjectID(req.params.id);
      db.collection("building").findOneAndUpdate(
        { _id: id },
        { $set: { ...editedBuilding } },
        (err, data) => {
          if (err) res.send("cant edit building");
          else res.send(data);
        }
      );
    });
    app.delete("/clients/:id/buildings/:id", (req, res) => {
      let id = ObjectID(req.params.id);
      db.collection("building").findOneAndDelete({ _id: id }, (err, data) => {
        if (err) res.send("cant delete building");
        else res.send(data);
      });
    });
// handeling equipements
    app.get("/clients/:cltid/buildings/:bldid/equipements", (req, res) => {
      let bldid = req.params.bldid;
      db.collection("equipement")
        .find({building_Id: bldid})
        .toArray((err, data) => {
          if (err) res.send("cant fecth equipemnts");
          else res.send(data);
        });
    });
    app.post("/clients/:cltid/buildings/:bldid/equipements/add-equipement", (req, res) => {
      let newEquipement = req.body;
      db.collection("equipement").insertOne(newEquipement, (err, data) => {
        if (err) res.send("cant add equipement");
        else res.send(data);
      });
    });
    app.put("/clients/:cltid/buildings/:bldid/equipements/edit-equipement/:id", (req, res) => {
      let editedEquipemnt = req.body;
      let id = ObjectID(req.params.id);
      db.collection("equipement").findOneAndUpdate(
        { _id: id },
        { $set: { ...editedEquipemnt } },
        (err, data) => {
          if (err) res.send("cant edit equipement");
          else res.send(data);
        }
      );
    }); 
    app.delete("/clients/:cltid/buildings/:bldid/equipements/:id", (req, res) => {
      let id = ObjectID(req.params.id);
      db.collection("equipement").findOneAndDelete({ _id: id }, (err, data) => {
        if (err) res.send("cant delete equipement");
        else res.send(data);
      });
    }); 
// handeling benefits
   app.get("/clients/:cltid/buildings/:bldid/equipements/:eqpid", (req, res) => {
    let eqpid = req.params.eqpid;
    db.collection("prestation")
      .find({equipement_Id: eqpid})
      .toArray((err, data) => {
        if (err) res.send("cant fecth prestation");
        else res.send(data);
      });
  });
   app.post("/clients/:cltid/buildings/:bldid/equipements/:eqpid/add-benefits", (req, res) => {
     let newprestation = req.body;
     db.collection("prestation").insertOne(newprestation, (err, data) => {
       if (err) res.send("cant add prestation");
       else res.send(data);
     });
   }); 
  }
);

app.listen(3007, err => {
  if (err) console.log("server erreur");
  else console.log("server is running on port 3007");
});
