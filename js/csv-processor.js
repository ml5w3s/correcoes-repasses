/**
 * Classe responsável por processar arquivos CSV.
 */
export class CSVProcessor {
    /**
     * Construtor da classe CSVProcessor.
     * @param {string} fileInput - ID do elemento de input de arquivos.
     */
    constructor(fileInput) {
        this.fileInput = document.getElementById(fileInput);
    }

    /**
     * Lê o arquivo CSV e processa os dados.
     * @param {Function} callback - Função a ser chamada após o processamento.
     */
    readFile(callback) {
        const file = this.fileInput.files[0];

        if (!file) {
            alert('Por favor, selecione um arquivo.');
            return;
        }

        // Utiliza a biblioteca PapaParse para processar o CSV
        Papa.parse(file, {
            header: true, // Converte a primeira linha do CSV em chaves do objeto
            complete: function (results) {
                // Limita os dados a 7 colunas para manter a exibição organizada
                const limitedData = results.data.map(row => {
                    return Object.keys(row)
                        .slice(0, 7)
                        .reduce((obj, key) => {
                            obj[key] = row[key];
                            return obj;
                        }, {});
                });

                console.log(limitedData);
                callback(limitedData);
            }
        });
    }
}

