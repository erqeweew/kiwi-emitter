import Colorizer from "string-colorizer";

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
    console.log()
    const errorColorizer = new Colorizer()
    super(errorColorizer.styles.bright(errorColorizer.foregroundColors.yellow(message)));
    Object.defineProperty(this, "name", {
      value: errorColorizer.styles.bright(errorColorizer.foregroundColors.red(`KiwiError[${typeof options?.name === "string" ? options.name : "UnknownError"}]`)),
      configurable: false,
      writable: false
    })
    Object.defineProperty(this, "stack", {
      value: options?.stack ?? this.stack,
      configurable: false,
      writable: false
    })
  };

  throw() {
    throw this;
  };
};

export default class EmitterError extends DefaultError {};