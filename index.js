/*jslint node: true */
'use strict';

const Attach = require('./lib/Attach');
const StorageProvider = require('./lib/StorageProvider');
const FileProcessor = require('./lib/FileProcessor');
const attach = new Attach();

module.exports = exports = attach.plugin.bind(attach);
module.exports.StorageProvider = StorageProvider;
module.exports.FileProcessor = FileProcessor;