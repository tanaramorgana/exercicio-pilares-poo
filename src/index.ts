import { Normal, Vip, Camarote } from "./classes/classes-exercicio1";
import { Novo, Velho } from "./classes/classes-exercicio2";
import { Cachorro, Cavalo, Gato } from "./classes/classes-exercicio3";

// 1. Crie uma classe abstrata chamada Ingresso que possui um valor
// em reais e um método imprimeValor()

// a. crie uma classe Normal, que herda Ingresso..

// b. crie uma classe VIP, que herda Ingresso e possui um valor
// adicional. Altere o método imprimeValor para mostrar o valor
// do ingresso somado com o adicional.

// c. crie uma classe Camarote, que herda ingresso e possui um
// valor adicional. Altere o método imprimeValor para mostrar o
// valor do ingresso somado com o adicional.
console.log('exercicio 1');


const ingressoNormal = new Normal(50);
ingressoNormal.imprimeValor();

const ingressoVip = new Vip(50, 30);
ingressoVip.imprimeValor();

const ingressoCamarote = new Camarote(80, 30);
ingressoCamarote.imprimeValor();


// 2. Crie a classe Imovel, que possui um endereço e um preço.
// a. crie uma classe Novo, que herda Imovel e possui um adicional
// no preço. Crie métodos de acesso e impressão deste valor
// adicional.
// b. crie uma classe Velho, que herda Imovel e possui um desconto
// no preço. Crie métodos de acesso e impressão para este
// desconto.
console.log('exercicio 2');

const imovelNovo = new Novo(20, 'rua das flores', 50000);
const imovelVelho = new Velho(20, 'rua das flores', 50000);
imovelNovo.impriveValor();
imovelVelho.impriveValor();

// 3. Dado o seguinte diagrama:

// Identifique os atributos e comportamentos que são comuns entre os
// 3 animais e encapsule-os na superclasse Animal. Crie pelo menos 1
// comportamento diferente para cada animal.

// “Este exercício será corrigido na próxima aula com o Tech Helper e deverá
// ser postado na Class até o horário estipulado da tarefa na plataforma.
// Crie um arquivo compactado contendo os arquivos com a resolução da
// atividade e realize o upload no post da atividade no Class, ou suba no
// Github e poste o link para o respectivo repositório.”
console.log('exercicio 3');

const madah = new Cachorro('Madah', 'Preto e Tan', 'Dachshund', 'Pelo curto', 'Orelhas caídas');
console.log(madah);

madah.andar();
madah.fazerSom();

const pacoca = new Cavalo('Paçoca', 'marrom', 'Crioulo', 'Pelo curto', 'Crina preta');
console.log(pacoca);

pacoca.andar();
pacoca.fazerSom();

const cacau = new Gato('Cacau', 'Marrom', 'Sem raça', 'Pelo médio', 'Garras afiadas');
console.log(cacau);
cacau.andar();
cacau.fazerSom();