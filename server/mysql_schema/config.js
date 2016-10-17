var env = process.env.NODE_ENV,
    CONFIG;

if (env == undefined) env = "development"


var prod = {
    'username': 'truepe5k_admin',
    'password': 'truepe5k',
    'database': 'truepe5k_truepathmakers',
    'host': 'truepathmakers.com',
    'dialect': 'mysql',
    'logging': false,
    'pool': {
    'max': 10,
        'min': 1,
        'idle': 10000
    }
}

var dev = {
    'username': 'truepe5k_admin',
    'password': 'truepe5k',
    'database': 'truepe5k_truepathmakers',
    'host': 'truepathmakers.com',
    'dialect': 'mysql',
    'logging': false,
    'pool': {
        'max': 10,
        'min': 1,
        'idle': 10000
    }
}


switch (env) {
    case 'production':
        CONFIG = prod;
        break;
    case 'development':
        CONFIG = dev;
        break;
    default:
        CONFIG = dev;
        break;
}


module.exports = {
    'mysql_conf' : CONFIG
}
