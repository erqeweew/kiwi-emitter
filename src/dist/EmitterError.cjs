"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _chalk = _interopRequireDefault(require("chalk"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * @abstract
 */
class DefaultError extends Error {
  /**
   * Create new error.
   * @param {string} message 
   * @param {{ name?: string, stack?: string }} options 
   */
  constructor(message, options) {
    super(_chalk.default.yellowBright(message));
    this.name = _chalk.default.redBright(`KiwiError[${typeof options?.name === "string" ? options.name : "UnknownError"}]`);
    if (options?.stack) this.stack = options.stack;
  }
  throw() {
    throw this;
  }
}
;
class EmitterError extends DefaultError {
  constructor(message, options) {
    super(message, options);
  }
}
exports.default = EmitterError;
;
