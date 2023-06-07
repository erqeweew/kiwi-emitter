import colorette, { red } from "colorette";

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
    super(colorette.yellowBright(message));
    
    this.name = colorette.redBright(`KiwiError[${typeof options?.name === "string" ? options.name : "UnknownError"}]`);

    if (options?.stack) this.stack = options.stack;
  };

  throw() {
    throw this;
  };
};

export default class EmitterError extends DefaultError {
  constructor(message, options) {
    super(message, options);
  };
};