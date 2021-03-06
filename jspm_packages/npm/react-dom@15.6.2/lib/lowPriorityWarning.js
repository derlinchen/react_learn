/* */ 
(function(process) {
  'use strict';
  var lowPriorityWarning = function() {};
  if (process.env.NODE_ENV !== 'production') {
    var printWarning = function(format) {
      for (var _len = arguments.length,
          args = Array(_len > 1 ? _len - 1 : 0),
          _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function() {
        return args[argIndex++];
      });
      if (typeof console !== 'undefined') {
        console.warn(message);
      }
      try {
        throw new Error(message);
      } catch (x) {}
    };
    lowPriorityWarning = function(condition, format) {
      if (format === undefined) {
        throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
      }
      if (!condition) {
        for (var _len2 = arguments.length,
            args = Array(_len2 > 2 ? _len2 - 2 : 0),
            _key2 = 2; _key2 < _len2; _key2++) {
          args[_key2 - 2] = arguments[_key2];
        }
        printWarning.apply(undefined, [format].concat(args));
      }
    };
  }
  module.exports = lowPriorityWarning;
})(require('process'));
