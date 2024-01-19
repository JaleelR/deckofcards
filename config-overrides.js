// config-overrides.js
const path = require('path');

module.exports = function override(config, env) {
    // Add your webpack customizations here

    // Add an alias for the 'http' module
    config.resolve.alias = {
        ...config.resolve.alias,
        'http': 'stream-http',
    };

    return config;
};
