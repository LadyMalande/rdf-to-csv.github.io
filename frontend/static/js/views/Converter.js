import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Converter");
    }

    async getHtml() {
        return `
            <h1>Converter</h1>
            <p>This tab will have the RDF to CSVW convertor included once its implemented.</p>
            
        `;
    }
}