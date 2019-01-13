
const path = require('path');

module.exports = {

    register (NodeCI) {
        NodeCI.registerProcessor('Shell', require('./shell'), path.join(__dirname, 'shell'));
        // NodeCI.registerType('JS Script', require('./shell'));
    }
};
