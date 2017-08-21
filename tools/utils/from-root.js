const path = require('path');

module.exports = function fromroot(p) {
	return path.join(__dirname, '../..', p);
}