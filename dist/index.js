"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./classes/server"));
const environment_1 = require("./global/environment");
const router_1 = __importDefault(require("./routes/router"));
const body_parser_1 = __importDefault(require("body-parser"));
const server = new server_1.default();
//importante usar antes de la configuracion de las rutas
//BodyParser
server.app.use(body_parser_1.default.urlencoded({ extended: true }));
//aqui se pasa la peticion de un formato json
server.app.use(body_parser_1.default.json());
server.app.use('/', router_1.default);
server.inicio(() => {
    console.log(`servidor corriendo en puerto ${environment_1.SERVER_PORT}`);
});
