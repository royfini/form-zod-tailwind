'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e7fd0419.js');
const appGlobals = require('./app-globals-3a1e7e63.js');

/*
 Stencil Client Patch Browser v4.19.2 | MIT Licensed | https://stenciljs.com
 */
var patchBrowser = () => {
  const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('tailwind-zod.cjs.js', document.baseURI).href));
  const opts = {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return index.promiseResolve(opts);
};

patchBrowser().then(async (options) => {
  await appGlobals.globalScripts();
  return index.bootstrapLazy([["rf-form_2.cjs",[[1,"rf-form",{"fnameInput":[32],"lnameInput":[32],"emailInput":[32],"mobileInput":[32],"ageInput":[32],"fnameError":[32],"lnameError":[32],"emailError":[32],"mobileError":[32],"ageError":[32],"disable":[32]}],[1,"rf-select-options",{"isOpen":[32],"selectedOption":[32]}]]]], options);
});

exports.setNonce = index.setNonce;

//# sourceMappingURL=tailwind-zod.cjs.js.map