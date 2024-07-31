import { b as bootstrapLazy } from './index-809e3d02.js';
export { s as setNonce } from './index-809e3d02.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await globalScripts();
  return bootstrapLazy([["rf-form",[[1,"rf-form",{"fnameInput":[32],"lnameInput":[32],"emailInput":[32],"mobileInput":[32],"ageInput":[32],"fnameError":[32],"lnameError":[32],"emailError":[32],"mobileError":[32],"ageError":[32],"disable":[32]}]]]], options);
};

export { defineCustomElements };

//# sourceMappingURL=loader.js.map