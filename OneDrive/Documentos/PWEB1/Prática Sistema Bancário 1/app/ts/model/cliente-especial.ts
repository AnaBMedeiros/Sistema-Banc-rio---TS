class ClienteEspecial extends Cliente {

    private clienteEspecial: Array<Cliente>;

    constructor (nome: string, cpf: number){
        super(nome, cpf)
        this.clienteEspecial = new Array<Cliente>();
    }
}