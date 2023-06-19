"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _colorette = require("colorette");
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
    super((0, _colorette.yellowBright)(message));
    Object.defineProperty(this, "name", {
      value: (0, _colorette.redBright)(`KiwiError[${typeof options?.name === "string" ? options.name : "UnknownError"}]`),
      configurable: false,
      writable: false
    });
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
