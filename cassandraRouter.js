
const express = require("express");
const router = express.Router();
const cassandra = require("cassandra-driver");

//Retorna una conexión a Cassandra
async function getCassConn(){
    const client = new cassandra.Client({contactPoints: ["127.0.0.1"], localDataCenter: "datacenter1", keyspace: "prototype"});
    client.connect((err, result) => {
        console.log("Cassandra connected");
    });
    return client;
}

//Atención de petición de lista de clientes
router.get("/prueba", async (req, res) => {
    const query = "SELECT username, first_name, last_name FROM user WHERE username = ? ALLOW FILTERING;";
    const client = await getCassConn();
    const result = await client.execute(query, ["angel"]);
    await client.shutdown();
    res.send(result);
});

module.exports = router;