// keys.js figure otu the credentials

if (proccess.env.NODE_ENV === 'production'){
    // we are in prod
    module.export = require('./prod');
} else {
    // we are in dev
    module.export = require('./dev');
}