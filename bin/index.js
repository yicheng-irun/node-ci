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
        Sona.build(args);
    });

/**
 * run
 */
commander.command('run')
    .description('run')
    .alias('r')
    .action(function (...args) {
        Sona.dev(args);
    });

/**
 * stop
 */
commander.command('stop')
    .description('stop')
    .alias('r')
    .action(function (...args) {
        Sona.dev(args);
    });

/**
 * list
 */
commander.command('list')
    .description('list')
    .alias('r')
    .action(function (...args) {
        Sona.dev(args);
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