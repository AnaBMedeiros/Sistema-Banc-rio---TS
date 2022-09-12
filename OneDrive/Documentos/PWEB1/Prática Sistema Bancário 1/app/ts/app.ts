let contaController = new ContaController();

contaController.listar();


const c1 = new Conta('1', 100);
const p1 = new Poupanca('2', 100);
const cb1 = new ContaBonificada('3', 0);
const cl1 = new Cliente('Ana', 222);
const cl2 = new Cliente('Gustavo', 111);
let cls1 = new Clientes();
let cls2 = new Clientes();


console.log('Conta: ' + c1.saldo);

p1.atualizarSaldoAniversario();

console.log('Poupanca: ' + p1.saldo);

cb1.creditar(100);
console.log('Conta Bonificada: ' + cb1.saldo);

//Clientes.inserir(cls1);

cls1.listar();
cls2.remover(222);
cls1.pesquisar(111);