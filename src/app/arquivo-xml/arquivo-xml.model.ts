import { ArquivoXmlEnum } from "./arquivo-xml.enum";

export class ArquivoXmlModel {
    id!: number;
    nomeArquivo!: string;
    numero!: number;
    nomeEmitente!: string;
    nomeDestinatario!: string;
    valor!: number;
    duplicatas!: any;
    status!: string;

    constructor() {
        this.status = ArquivoXmlEnum.AGUARDANDO_PROCESSAMENTO;
    }
}