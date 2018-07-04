const { Log, defaultOptions } = require('hiplog');

// Log plugin
const plugin = {
  name: 'log',
  options: {
    __root: 'level',
    level: {
      type: String,
      default: defaultOptions.level,
      enum: defaultOptions.levels,
      env: 'LOG_LEVEL'
    },
    displayTime: {
      type: Boolean,
      default: defaultOptions.displayTime,
      env: 'LOG_TIME'
    },
    displayTimeFormat: {
      type: String,
      default: defaultOptions.displayTimeFormat,
      env: 'LOG_TIME_FORMAT'
    },
    separator: {
      type: String,
      default: defaultOptions.separator,
      env: 'LOG_SEPARATOR'
    },
    stream: {
      validate: value => ['object', 'function'].indexOf(typeof value) !== -1,
      default: defaultOptions.stream
    },
    format: {
      type: Function,
      default: defaultOptions.format
    },
  },
  init: ctx => {
    ctx.log = new Log(ctx.options.log);
  }
};

module.exports = plugin;
