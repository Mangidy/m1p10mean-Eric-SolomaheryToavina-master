const controllerClient = require('./controller/client/controller.client')
var dataBase

const sendDb = (db) => {
    dataBase = db
}

const home = (req, res) => {
    res.setHeader("Content-Type", "text/plain")
    controllerClient.HomeClient(req, res)
}

const login = (req, res) => {
    res.setHeader("Content-Type", "text/plain")
    controllerClient.LoginClient(dataBase, res, req)
}

const logout = (req, res) => {
    res.setHeader("Content-Type", "text/plain")
    controllerClient.LogoutClient(res, req)
}

exports.home = home
exports.login = login
exports.logout = logout
exports.sendDb = sendDb