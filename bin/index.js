#!/usr/bin/env node

process.title = 'Sona';

/**
 * 控制台部分
 */

const commander = require('commander');
const package = require('../package.json');
const NodeCI = require('../index');

commander.version(package.version, '-v, --version');

/**
 * start
 */
commander.command('start')
    .description('start')
    .alias('s')
    .action(function (...args) {
        NodeCI.start(args);
    });

/**
 * run
 */
commander.command('run')
    .description('run')
    .alias('r')
    .action(function (...args) {
        NodeCI.run(args);
    });

/**
 * stop
 */
commander.command('stop')
    .description('stop')
    .alias('r')
    .action(function (...args) {
        NodeCI.stop(args);
    });

/**
 * list
 */
commander.command('list')
    .description('list')
    .alias('r')
    .action(function (...args) {
        NodeCI.list(args);
    });



function camelize (str) {
    return str.replace(/-(\w)/g, (_, c) => c ? c.toUpperCase() : '');
}

function cleanArgs (cmd) {
    const args = {};
    cmd.options.forEach(o => {
        const key = camelize(o.long.replace(/^--/, ''));
        if (typeof cmd[key] !== 'function' && typeof cmd[key] !== 'undefined') {
            args[key] = cmd[key];
        }
    });
    return args;
}