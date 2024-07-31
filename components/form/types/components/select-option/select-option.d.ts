export declare class SelectOption {
    element: HTMLElement;
    componentDidLoad(): void;
    options: {
        code: string;
        img: string;
    }[];
    isOpen: boolean;
    setIsOpen(): void;
    selectedOption: {
        code: string;
        img: string;
    };
    setSelectedOptions(value: {
        code: string;
        img: string;
    }): void;
    render(): any;
}
