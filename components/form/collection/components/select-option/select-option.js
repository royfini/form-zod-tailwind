import { h } from "@stencil/core";
import tailwind from "../../output.css";
export class SelectOption {
    constructor() {
        this.options = [
            { code: '+961', img: 'https://flagcdn.com/w320/lb.png' },
            { code: '+392', img: 'https://flagcdn.com/w320/it.png' },
            { code: '+1', img: 'https://flagcdn.com/w320/us.png' },
        ];
        this.isOpen = false;
        this.selectedOption = { code: '+961', img: 'https://flagcdn.com/w320/lb.png' };
    }
    componentDidLoad() {
        const shadowRoot = this.element.shadowRoot;
        if (shadowRoot) {
            const style = document.createElement('style');
            style.textContent = tailwind;
            shadowRoot.appendChild(style);
        }
    }
    setIsOpen() {
        this.isOpen = !this.isOpen;
    }
    setSelectedOptions(value) {
        console.log(value);
        this.selectedOption = value;
        this.isOpen = false;
    }
    render() {
        let list = null;
        if (this.isOpen) {
            list = (h("div", { key: '99f78faf0b4efdc8ce6ffe46a4ed3e29a67927d5', class: "absolute top-6 right-0 z-10 mt-4 w-20 origin-top-right rounded-md border border-gray-100 bg-white shadow-lg flex flex-col" }, this.options.map(option => (h("button", { type: "button", class: 'w-full', onClick: this.setSelectedOptions.bind(this, option) }, h("div", { class: "w-full flex flex-row justify-between items-center rounded lg px-2 text-sm text-gray-500 no-underline hover:bg-gray-50" }, h("div", null, option.code), h("img", { src: option.img, class: "w-5 h-4" })))))));
        }
        return (h("div", { key: '6fb72e8deb8fdc6514ae31e4aa9a264d0258c6a6', class: "inline-flex m-32" }, h("div", { key: '6cf6d31263c4b00fc36256c71cc9ce8727b5f612', class: "relative inline-flex w-20 rounded-md bg-white" }, h("div", { key: '8bda75360d2aad659c95eae7e2cfd3100894e5d8', class: "w-15 rounded-l-md px-4 py-2 flex flex-row justify-center items-center" }, h("div", { key: '64b9ae6617948fdb0d843500881fa4200a99d092' }, this.selectedOption.code), h("img", { key: '6322660b4d955ed563f155cdbdba9bb7ec9d7aa4', src: this.selectedOption.img, class: "w-5 h-4" })), h("div", { key: '8cf7fce64c972e815af00b86a8f789df15f188e5', class: "relative w-5" }, h("button", { key: '5d1db9f0baa937a00795f5e683284780992f4c5d', onClick: this.setIsOpen.bind(this), type: "button", class: "inline-flex h-full items-center justify-center rounded-r-md border-1 border-gray-10 text-gray-600" }, h("svg", { key: 'aaea27363da07d3ba30e0065475f9b1db02a19d4', xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", "stroke-width": "1.5", stroke: "currentColor", class: "size-6 h-10 w-3" }, h("path", { key: '0a899bf00c1640ee5e283d7ce481a75641b36a2d', "stroke-linecap": "round", "stroke-linejoin": "round", d: "m19.5 8.25-7.5 7.5-7.5-7.5" })))), list)));
    }
    static get is() { return "rf-select-options"; }
    static get encapsulation() { return "shadow"; }
    static get states() {
        return {
            "isOpen": {},
            "selectedOption": {}
        };
    }
    static get elementRef() { return "element"; }
}
//# sourceMappingURL=select-option.js.map
