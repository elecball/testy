const express = require("express");
const mongoose = require("mongoose");
const { MongoClient, ServerApiVersion } = require("mongodb");
const app = express();

const url = 'mongodb+srv://admin:superadmin@testcluster.rpmnikd.mongodb.net/?retryWrites=true&w=majority'
const client = new MongoClient(url);

async function connect() {
    try {
        await client.connect();

        // await createscore(client, {
        //     name: "Alpha",
        //     score: 30
        // });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error(error);
    }
}

connect();

async function createscore(cli, newscore) {
    const result = await cli.db("TestDB").collection("score").insertOne(newscore);

    console.log(`New score created, id : ${result.insertedId}`)
}

async function listDatabases(cli) {
    const dbList = await cli.db().admin().listDatabases();
    console.log("Databases:");
    dbList.databases.forEach(db => {
        console.log(`- ${db.name}`);
    });
}

app.get("/", (req, res) => {
    res.send("<h1>It's workingggggg 🤗</h1>")
});

app.get("/test", (req, res) => {
    res.send("<h1>It's working 🤗</h1>")
});

app.listen(8000, () => {
    console.log("server started on port 8000");
});