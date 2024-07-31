import { p as promiseResolve, b as bootstrapLazy } from './index-809e3d02.js';
export { s as setNonce } from './index-809e3d02.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

/*
 Stencil Client Patch Browser v4.19.2 | MIT Licensed | https://stenciljs.com
 */
var patchBrowser = () => {
  const importMeta = import.meta.url;
  const opts = {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return promiseResolve(opts);
};

patchBrowser().then(async (options) => {
  await globalScripts();
  return bootstrapLazy([["rf-form",[[1,"rf-form",{"fnameInput":[32],"lnameInput":[32],"emailInput":[32],"mobileInput":[32],"ageInput":[32],"fnameError":[32],"lnameError":[32],"emailError":[32],"mobileError":[32],"ageError":[32],"disable":[32]}]]]], options);
});

//# sourceMappingURL=tailwind-zod.js.map