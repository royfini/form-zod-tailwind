'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-0f75a115.js');
const appGlobals = require('./app-globals-3a1e7e63.js');

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await appGlobals.globalScripts();
  return index.bootstrapLazy([["rf-form.cjs",[[1,"rf-form",{"fnameInput":[32],"lnameInput":[32],"emailInput":[32],"mobileInput":[32],"ageInput":[32],"fnameError":[32],"lnameError":[32],"emailError":[32],"mobileError":[32],"ageError":[32],"disable":[32]}]]]], options);
};

exports.setNonce = index.setNonce;
exports.defineCustomElements = defineCustomElements;

//# sourceMappingURL=loader.cjs.js.map