/**
 * Created by aman on 21/10/16.
 */
var env = process.env.NODE_ENV,
    INSTALLATION_DB;

var mysql = {
    MYSQL_SCHEMA_MAIN : '../mysql_schema/schema'
}

INSTALLATION_DB = mysql;

module.exports = INSTALLATION_DB
