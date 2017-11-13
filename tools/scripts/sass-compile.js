const StyleBuilder = require('@actito/style-builder');
const fromRoot = require('../utils/from-root');

new StyleBuilder(fromRoot('')).build('sass:compile');