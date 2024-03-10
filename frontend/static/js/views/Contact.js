import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Contacts & Resources");
    }

    async getHtml() {
        return `
            <h1>Contacts & Resources</h1>
            <h2>Contact</h2>
            <p>Contact the creator of this project!</p>
            <p>You can contact me on 
                <a href="https://github.com/LadyMalande">LadyMalande@GitHub</a> or via 
                <a href="https://www.facebook.com/tereza.miklosova/about">Tereza_Miklóšová@Facebook</a>.</p>

            <h2>Resources</h2>
            <p>This project consists of 3 repositories:</p>
            <ul>
            <li>The core <a href="https://github.com/LadyMalande/RDFtoCSV">library's repository</a> containing the implementation of the converter</li>
            <li>The <a href="https://github.com/LadyMalande/RDFtoCSVApplication">command line app's repository</a> that is runnable in a command line</li>
            <li>This <a href="https://github.com/LadyMalande/rdf-to-csv.github.io">website client's repository</a> where you can try out the converter live</li>
            </ul>

            All repositories are public after the thesis has been concluded.</br></br>

            If you wish to contribute to any of the repositories, do not hesitate to submit your contribution and make a pull request! </br>
            When I have a spare moment in the future, I will review them and possibly merge them for future use for other people.

            The text of the theis is available on the <a href="">(CURRENTLY UNAVAILABLE) official university website for student's works</a>. As of now, the text is only available in Czech language. 
            If an English version is ever published, it will have a separate link as the work will be translated in my free time after the thesis is concluded.
        `;
    }
}