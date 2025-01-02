//Archivo de barril para exportar todos los plugins
const  { getId } = require('../plugins/get-id.plugin');
const { getAge } = require('../plugins/get-age.plugin');
const { http } = require('../plugins/http-client.plugin');
const buildLogger = require('../plugins/logger.plugin');



module.exports = {
    getId,
    getAge,
    http,
    buildLogger,
}
