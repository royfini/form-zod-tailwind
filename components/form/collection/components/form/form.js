import { h } from "@stencil/core/internal";
import { z } from "zod";
import tailwind from "../../output.css";
export class Form {
    constructor() {
        this.schema = z.object({
            fname: z.string().min(1, { message: 'First Name is required' }),
            lname: z.string().min(1, { message: 'Last Name is required' }),
            email: z.string().email({ message: 'Invalid email address' }),
            mobile: z.number().refine(value => /^\d{4,12}$/.test(value.toString()), {
                message: 'Invalid mobile number. It should be between 4 and 12 digits long.',
            }),
            age: z.number().min(18, { message: 'Must be at least 18 years old' }).max(99, { message: 'Must be less than 100 years old' }),
        });
        this.fnameInput = undefined;
        this.lnameInput = undefined;
        this.emailInput = undefined;
        this.mobileInput = undefined;
        this.ageInput = undefined;
        this.fnameError = true;
        this.lnameError = true;
        this.emailError = true;
        this.mobileError = true;
        this.ageError = true;
        this.disable = true;
    }
    componentDidLoad() {
        const shadowRoot = this.element.shadowRoot;
        if (shadowRoot) {
            const style = document.createElement('style');
            style.textContent = tailwind;
            shadowRoot.appendChild(style);
        }
    }
    onInputFname(event) {
        const value = event.target.value;
        const name = z.string().min(1, { message: 'First Name is required' });
        const result = name.safeParse(value);
        //this.nameErrorMessage.textContent = result.success ? '' : result.error.errors[0].message;
        this.fnameError = !result.success;
        this.disableButton();
    }
    onInputLname(event) {
        const value = event.target.value;
        const name = z.string().min(1, { message: 'Last Name is required' });
        const result = name.safeParse(value);
        //this.nameErrorMessage.textContent = result.success ? '' : result.error.errors[0].message;
        this.lnameError = !result.success;
        this.disableButton();
    }
    onInputEmail(event) {
        const value = event.target.value;
        const email = z.string().email({ message: 'Invalid email address' });
        const result = email.safeParse(value);
        //this.emailErrorMessage.textContent = result.success ? '' : result.error.errors[0].message;
        this.emailError = !result.success;
        this.disableButton();
    }
    onInputMobile(event) {
        const value = event.target.value;
        const mobile = z.number().refine(value => /^\d{4,12}$/.test(value.toString()), {
            message: 'Invalid mobile number. It should be between 4 and 12 digits long.',
        });
        const result = mobile.safeParse(Number(value));
        console.log(result);
        this.mobileError = !result.success;
        this.disableButton();
    }
    onInputAge(event) {
        const value = event.target.value;
        const age = z.number().min(18, { message: 'Must be at least 18 years old' }).max(99, { message: 'Must be less than 100 years old' });
        const result = age.safeParse(Number(value));
        //this.ageErrorMessage.textContent = result.success ? '' : result.error.errors[0].message;
        this.ageError = !result.success;
        this.disableButton();
    }
    onSubmitForm(event) {
        event.preventDefault();
        let fname = this.fnameInputEl.value;
        let lname = this.lnameInputEl.value;
        let email = this.emailInputEl.value;
        let mobile = Number(this.mobileInputEl.value);
        let age = Number(this.ageInputEl.value);
        let data = {
            fname,
            lname,
            email,
            mobile,
            age,
        };
        let result = this.schema.safeParse(data);
        if (result.success) {
            alert('Submit successful');
        }
        else {
            alert('Something went wrong');
        }
    }
    disableButton() {
        let fname = this.fnameInputEl.value;
        let lname = this.lnameInputEl.value;
        let email = this.emailInputEl.value;
        let mobile = Number(this.mobileInputEl.value);
        let age = Number(this.ageInputEl.value);
        let data = {
            fname,
            lname,
            email,
            mobile,
            age,
        };
        let result = this.schema.safeParse(data);
        if (result.success) {
            this.disable = false;
        }
        else {
            this.disable = true;
        }
    }
    render() {
        return (h("div", { key: '51b2d37b21df18bb0590db95aaaf9de45160a86c', class: "flex justify-center items-center" }, h("form", { key: 'da5a4c951ca925a380bf34f74c6bd78cd413362c', onSubmit: this.onSubmitForm.bind(this), class: "flex flex-col justify-center items-center border-2 border-black rounded-md p-12 mt-24" }, h("div", { key: '643d433fadd4be732650ee9311d952a717664717', class: "row" }, h("div", { key: '3dff3a253aa86980fc910fc9dfcd3e9c286264c5', class: "card" }, h("input", { key: '38b48b2bf190cf22d2d04f83086a20a9fca98a19', class: { 'input-normal': true, 'input-error': this.fnameError }, type: "text", onInput: this.onInputFname.bind(this), value: this.fnameInput, ref: el => (this.fnameInputEl = el) }), h("label", { key: '874ae4d9a628650dae98453f68199be932341a21', class: { 'label-normal': true, 'label-error': this.fnameError } }, "First name")), h("div", { key: 'c9215e6a1c9c3905a7e7658cdbdac3e0ff1a18af', class: "card" }, h("input", { key: '3a888249215977fbddf69e5e2d85a4020712c092', class: { 'input-normal': true, 'input-error': this.lnameError }, type: "text", onInput: this.onInputLname.bind(this), value: this.lnameInput, ref: el => (this.lnameInputEl = el) }), h("label", { key: '84777eabde94b5118f7cbb11b076d46a534c1657', class: { 'label-normal': true, 'label-error': this.lnameError } }, "Last name"))), h("div", { key: '68da8d9c3ec2591c7993f25cc1ec58ccfede81c6', class: "row" }, h("div", { key: 'f566c3f987e4890d25619d90133fdff8a3433e29', class: "card" }, h("input", { key: '1230c30980f2ca263ae2718e44f96284d829b031', class: { 'input-normal': true, 'input-error': this.emailError }, type: "text", onInput: this.onInputEmail.bind(this), value: this.emailInput, ref: el => (this.emailInputEl = el) }), h("label", { key: 'd319a6c55cb816523ea22ddd4fb67187c6f0869d', class: { 'label-normal': true, 'label-error': this.emailError } }, "Email")), h("div", { key: 'f8ab6e4fcb21a133b6040739c254efe9eb1a4fe3', class: { 'flex': true, 'items-center': true, 'p-4': true, 'gap-3': true, 'input-normal': true, 'input-error': this.mobileError, 'card': true } }, h("rf-select-options", { key: '473e8948448cc41b035551bc9b7800cc93e8b342', class: 'absolute left-0 top-0 -translate-x-32 w-2 h-1 -translate-y-32 z-10' }), h("input", { key: '6f67e09c51c68c041914df1eb818c140cf555b60', type: "text", class: "w-3/4 outline-none ml-24", onInput: this.onInputMobile.bind(this), value: this.mobileInput, ref: el => (this.mobileInputEl = el) }), h("label", { key: '9bb18a93bc88da24ad6647f5fa8a3fdec5fe5ad8', class: "label z-20" }, "Country"), h("label", { key: '4b68befcce217ff70ecadd4b425ee50debc8dfd9', class: { 'label-mobilenumber': true, 'label-mobilenumber-error': this.mobileError } }, "Mobile number"))), h("div", { key: 'b0b2f0eb4266b8c3ddb584ecf8c846ae33c28799', class: "row" }, h("div", { key: '9187a6837370de2d143129a21385a808c4ecf2ec', class: "card" }, h("input", { key: '9c346addfabc495baed884131b0153f5bed339b8', class: { 'input-normal': true, 'input-error': this.ageError }, type: "number", onInput: this.onInputAge.bind(this), value: this.ageInput, ref: el => (this.ageInputEl = el) }), h("label", { key: 'f11303f40cd5343487a266f693e5d209ca7d3949', class: { 'label-normal': true, 'label-error': this.ageError } }, "Age")), h("button", { key: 'a26e1544fe73323095d8878db5041b8718f16b2b', class: { 'btn': true, 'opacity-50': this.disable }, disabled: this.disable }, "SUBMIT")))));
    }
    static get is() { return "rf-form"; }
    static get encapsulation() { return "shadow"; }
    static get states() {
        return {
            "fnameInput": {},
            "lnameInput": {},
            "emailInput": {},
            "mobileInput": {},
            "ageInput": {},
            "fnameError": {},
            "lnameError": {},
            "emailError": {},
            "mobileError": {},
            "ageError": {},
            "disable": {}
        };
    }
    static get elementRef() { return "element"; }
}
//# sourceMappingURL=form.js.map
