import { Observer } from './Observer.interface';
import { Pessoa } from './Pessoa';

export class Cliente extends Pessoa implements Observer {
    private idCliente: number;

    constructor(
        idCliente: number,
        nomeCompleto: string,
        cpf: BigInt,
        email: string,
        dataNascimento: string,
        estado: string,
        cidade: string,
        bairro: string,
        rua: string,
        numero: number,
        cep: BigInt
    ) {
        super(nomeCompleto, cpf, email, dataNascimento, estado, cidade, bairro, rua, numero, cep);
        this.idCliente = idCliente;
    }

    public update(message: string): void {
        console.log(`Notificação para o cliente ${this.nomeCompleto}: ${message}`);
    }
}
