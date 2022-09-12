class Cliente{

    private _nome: string;
    private _cpf: number;
    private _conta: Conta;

    constructor(nome: string, cpf: number) {
        this._nome = nome;
        this._cpf = cpf;
    }

    get nome() {
        return this._nome;
    }

    get cpf(){
        return this._cpf
    }

    set nome (value: string){
        this._nome = value
    }

    set cpf(value: number){
        this._cpf = value
    }

}



