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
        return (h("div", { key: '51b2d37b21df18bb0590db95aaaf9de45160a86c', class: "flex justify-center items-center" }, h("form", { key: 'da5a4c951ca925a380bf34f74c6bd78cd413362c', onSubmit: this.onSubmitForm.bind(this), class: "flex flex-col justify-center items-center border-2 border-black rounded-md p-12 mt-24" }, h("div", { key: '643d433fadd4be732650ee9311d952a717664717', class: "row" }, h("div", { key: '3dff3a253aa86980fc910fc9dfcd3e9c286264c5', class: "card" }, h("input", { key: '38b48b2bf190cf22d2d04f83086a20a9fca98a19', class: { 'input-normal': true, 'input-error': this.fnameError }, type: "text", onInput: this.onInputFname.bind(this), value: this.fnameInput, ref: el => (this.fnameInputEl = el) }), h("label", { key: '874ae4d9a628650dae98453f68199be932341a21', class: { 'label-normal': true, 'label-error': this.fnameError } }, "First name")), h("div", { key: 'c9215e6a1c9c3905a7e7658cdbdac3e0ff1a18af', class: "card" }, h("input", { key: '3a888249215977fbddf69e5e2d85a4020712c092', class: { 'input-normal': true, 'input-error': this.lnameError }, type: "text", onInput: this.onInputLname.bind(this), value: this.lnameInput, ref: el => (this.lnameInputEl = el) }), h("label", { key: '84777eabde94b5118f7cbb11b076d46a534c1657', class: { 'label-normal': true, 'label-error': this.lnameError } }, "Last name"))), h("div", { key: '68da8d9c3ec2591c7993f25cc1ec58ccfede81c6', class: "row" }, h("div", { key: 'f566c3f987e4890d25619d90133fdff8a3433e29', class: "card" }, h("input", { key: '1230c30980f2ca263ae2718e44f96284d829b031', class: { 'input-normal': true, 'input-error': this.emailError }, type: "text", onInput: this.onInputEmail.bind(this), value: this.emailInput, ref: el => (this.emailInputEl = el) }), h("label", { key: 'd319a6c55cb816523ea22ddd4fb67187c6f0869d', class: { 'label-normal': true, 'label-error': this.emailError } }, "Email")), h("div", { key: 'f8ab6e4fcb21a133b6040739c254efe9eb1a4fe3', class: { 'flex': true, 'items-center': true, 'p-4': true, 'gap-3': true, 'input-normal': true, 'input-error': this.mobileError, 'card': true } }, h("select", { key: 'd36dcf0a6c2b09fc8721b849756d26428acfcc32', class: "w-1/4 outline-none" }, h("option", { key: 'f2408ad4b64fe4d799da2b0b9b4ab91b0ef88efe', value: "" }, "+961"), h("option", { key: '2c00496d60295f0c86427e174c1c08c61583a885', value: "1" }, "+456"), h("option", { key: 'd9a6181454a7df2f7d6060c5a43d46b57eaee682', value: "2" }, "+34"), h("option", { key: '5eb9246cd7b6a13734a2acb82f20da2ebdacfd71', value: "3" }, "+2345")), h("input", { key: '6b71fbc52b29f93097b03f052c614c06c396b23a', type: "text", class: "w-3/4 outline-none", onInput: this.onInputMobile.bind(this), value: this.mobileInput, ref: el => (this.mobileInputEl = el) }), h("label", { key: 'e9988c1f039aa9a97da67761aff1b42fd0c76bb5', class: "label" }, "Country"), h("label", { key: 'a4b4aa523a2445b7a7634f03e291914fee4706b9', class: { 'label-mobilenumber': true, 'label-mobilenumber-error': this.mobileError } }, "Mobile number"))), h("div", { key: '555ce8f3507362d8b272b83c256be0615ac3384d', class: "row" }, h("div", { key: 'c8e57f0f62d438cb7aed59b1a07b7c9dc30ccb92', class: "card" }, h("input", { key: '65cb8ec1060f30d86da099cbd35d60fc0af8f033', class: { 'input-normal': true, 'input-error': this.ageError }, type: "number", onInput: this.onInputAge.bind(this), value: this.ageInput, ref: el => (this.ageInputEl = el) }), h("label", { key: '1b904d4cda7a5f1b9bb91bbd421645410a422d50', class: { 'label-normal': true, 'label-error': this.ageError } }, "Age")), h("button", { key: '4a275c8847cdee7e9065cb478dc81b958baa39e4', class: { 'btn': true, 'opacity-50': this.disable }, disabled: this.disable }, "SUBMIT")))));
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
