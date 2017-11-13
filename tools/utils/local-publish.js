const privateRegistryClient = require('@actito/private-registry-client');
const rootDir = require('path').join(__dirname, '../..');
privateRegistryClient.publish(rootDir);