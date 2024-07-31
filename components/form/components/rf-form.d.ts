import type { Components, JSX } from "../types/components";

interface RfForm extends Components.RfForm, HTMLElement {}
export const RfForm: {
    prototype: RfForm;
    new (): RfForm;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
