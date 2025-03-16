import { CSVProcessor } from './csv-processor.js';
import { TableRenderer } from './table-renderer.js';

export class App {
    constructor() {
        this.csvProcessor = new CSVProcessor('fileInput');
        this.tableRenderer = new TableRenderer('tableContainer');
        this.setupEventListeners();
    }

    setupEventListeners() {
        document.getElementById('readFileBtn').addEventListener('click', () => {
            this.csvProcessor.readFile(data => this.tableRenderer.setData(data));
        });
    }
}
