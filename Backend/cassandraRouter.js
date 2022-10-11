
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
router.get("/return_by_name/:name/:password", async (req, res) => {
    const query = "SELECT username, password, first_name, last_name, admin, ID_val FROM User WHERE username = ? AND password = ? ALLOW FILTERING;";
    const client = await getCassConn();
    const result = await client.execute(query, [req.params.name, req.params.password]);
    await client.shutdown();
    if (result.err) {
        return res.send("No existe el usuario");
    }
    else if (result.rows.length >= 1) {
        console.log(result.rows[0])
        return res.send(result.rows[0]);
    }
});

router.get("/return_cuentas", async (req, res) => {
    const query = "SELECT ID_val, type, amount FROM account;";
    const client = await getCassConn();
    const result = await client.execute(query);
    await client.shutdown();
    res.send(result.rows);
});

router.get("/return_by_id/:id", async (req, res) => {
    const query = "SELECT ID_val, type, amount FROM account WHERE id_val =  ?;";
    const client = await getCassConn();
    const result = await client.execute(query, [req.params.id]);
    await client.shutdown();
    console.log(result.rows)
    res.send(result.rows);
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