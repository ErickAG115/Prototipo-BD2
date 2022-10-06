//Inclusión de dependencias
const express = require("express");

//Inclusión de modelos y routers
const cassandraRouter = require("./cassandraRouter");


//Creación de servidor y configuraciones
// const methodOverride = require("method-override");
const app = express();

// app.use(methodOverride("_method"));
app.use(express.urlencoded({extended: false}));
app.use(express.static(__dirname));



//Asignación de atención de los routers a las rutas
app.use("/cassandra", cassandraRouter);

//Configuración de puerto
app.listen(3000);

