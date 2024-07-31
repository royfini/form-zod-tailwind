import { z } from 'zod';
export declare class Form {
    element: HTMLElement;
    componentDidLoad(): void;
    fnameInputEl: HTMLInputElement;
    lnameInputEl: HTMLInputElement;
    emailInputEl: HTMLInputElement;
    mobileInputEl: HTMLInputElement;
    ageInputEl: HTMLInputElement;
    fnameInput: string;
    lnameInput: string;
    emailInput: string;
    mobileInput: string;
    ageInput: number;
    schema: z.ZodObject<{
        fname: z.ZodString;
        lname: z.ZodString;
        email: z.ZodString;
        mobile: z.ZodEffects<z.ZodNumber, number, number>;
        age: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        email?: string;
        fname?: string;
        lname?: string;
        mobile?: number;
        age?: number;
    }, {
        email?: string;
        fname?: string;
        lname?: string;
        mobile?: number;
        age?: number;
    }>;
    fnameError: boolean;
    onInputFname(event: Event): void;
    lnameError: boolean;
    onInputLname(event: Event): void;
    emailError: boolean;
    onInputEmail(event: Event): void;
    mobileError: boolean;
    onInputMobile(event: Event): void;
    ageError: boolean;
    onInputAge(event: Event): void;
    onSubmitForm(event: Event): void;
    disable: boolean;
    disableButton(): void;
    render(): any;
}
