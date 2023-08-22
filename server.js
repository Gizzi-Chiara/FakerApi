const express = require("express");
const app = express();
const { faker } = require('@faker-js/faker');

class Usuario {
    constructor() {
        this._id = faker.string.uuid(),
            this.nombre = faker.person.firstName(),
            this.apellido = faker.person.lastName(),
            this.telefono = faker.phone.number(),
            this.email = faker.internet.email(),
            this.password = faker.internet.password()
    }
}

class Empresa {
    constructor() {
        this._id = faker.string.uuid(),
            this.nombre = faker.company.name(),
            this.direccion = {
                calle: faker.location.street(),
                ciudad: faker.location.city(),
                estado: faker.location.state(),
                cp: faker.location.zipCode(),
                pais: faker.location.country()
            }
    }
}

class UsuarioEmpresa {
    constructor() {
        [
            this._idUsuario = faker.string.uuid(),
            this.nombreUsuario = faker.person.firstName(),
            this.apellidoUsuario = faker.person.lastName(),
            this.telefonoUsuario = faker.phone.number(),
            this.emailUsuario= faker.internet.email(),
            this.passwordUsuario = faker.internet.password()
        ],
            [
                this._idEmpresa = faker.string.uuid(),
                this.nombreEmpresa = faker.company.name(),
                this.direccionEmpresa = {
                    calle: faker.location.street(),
                    ciudad: faker.location.city(),
                    estado: faker.location.state(),
                    cp: faker.location.zipCode(),
                    pais: faker.location.country()
                }
            ]
    }
}

app.get("/api/users/new", (req, res) => {
    let nuevousuario = new Usuario();
    res.json(nuevousuario);
})

app.get("/api/companies/new", (req, res) => {
    let nuevaEmpresa = new Empresa();
    res.json(nuevaEmpresa);
})

app.get("/api/user/company", (req, res) => {
    let nuevoUsuarioEmpresa = new UsuarioEmpresa();
    res.json(nuevoUsuarioEmpresa);
})

app.listen(8000, () => console.log("Servidor corriendo"));