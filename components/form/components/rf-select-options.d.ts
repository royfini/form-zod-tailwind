import type { Components, JSX } from "../types/components";

interface RfSelectOptions extends Components.RfSelectOptions, HTMLElement {}
export const RfSelectOptions: {
    prototype: RfSelectOptions;
    new (): RfSelectOptions;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
