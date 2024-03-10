import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("About");
    }

    async getHtml() {
        return `
            <h1> RDF to CSVW Converter </h1>
            <p> 
                This webpage serves as a live presentation of the results of the thesis about RDF to CSVW converter. It is simple, but you should be able to find everything you need to know about this project!
            </p>
            <p> 
                <a href="/converter" data-link>Try out the live converter!</a>
            </p>
        `;
    }
}