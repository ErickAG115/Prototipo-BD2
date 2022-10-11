
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
router.get("/return_by_name", async (req, res) => {
    const query = "SELECT username, password, first_name, last_name, admin, ID_val FROM user WHERE ID_val = ? ALLOW FILTERING;";
    const client = await getCassConn();
    const result = await client.execute(query, [req.body.ID_val]);
    await client.shutdown();
    res.send(result);
});

router.get("/return_cuentas", async (req, res) => {
    const query = "SELECT ID, type, amount FROM account";
    const client = await getCassConn();
    const result = await client.execute(query, [""]);
    await client.shutdown();
    res.send(result);
});

router.get("/return_by_id", async (req, res) => {
    const query = "SELECT ID, type, amount FROM account WHERE ID =  ? ALLOW FILTERING;";
    const client = await getCassConn();
    const result = await client.execute(query, [req.body.ID_val]);
    await client.shutdown();
    res.send(result);
});

router.get("/return_users", async (req, res) => {
    const query = "SELECT username, password, first_name, last_name, birthdate, admin, ID_val FROM user";
    const client = await getCassConn();
    const result = await client.execute(query, [""]);
    await client.shutdown();
    res.send(result);
});

router.post("/register_user", async (req, res) => {
    const query = "INSERT INTO user(username, password, first_name, last_name, birthdate, admin, ID_val) VALUES(?,?,?,?,?,?,?);";
    const client = await getCassConn();
    const result = await client.execute(query, [req.body.username, req.body.password, req.body.first_name, req.body.last_name, req.body.birthdate, req.body.admin, req.body.ID_val]);
    await client.shutdown();
    res.send(result);
});

router.post("/register_account", async (req, res) => {
    const query = "INSERT INTO account(ID_val, type, amount) VALUES(?,?,?);";
    const client = await getCassConn();
    const result = await client.execute(query, [req.body.ID_val, req.body.type, req.body.amount]);
    await client.shutdown();
    res.send(result);
});

module.exports = router;