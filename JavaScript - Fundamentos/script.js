console.log('Arquivo externo');
/*Tipo Boolean*/
console.log(true);
console.log(typeof true);

/*Tipo Undefined*/
console.log(undefined);

/*tipo Null*/
console.log(null);

/**Tipo Number
 * Números Inteiros (1,4,6,7,9)
 * Números Flutuantes (1.5546 , 15.654, 356.6454)
 * Notações Científicas (2.5e2 => 2.5 * 10^2 )
 * NaN -> Not a Number
 *  */

console.log(2.5e2);
console.log(typeof 10);
console.log(typeof 2.5e2);
console.log('a' * 3); //NaN -> Not a Number

/*tipo Strings*/
console.log("Isso é um texto");
console.log('Isso é um texto');

console.log("Mc Donald's");
console.log('ele disse: "Vamos lá"');
/*Template literal (utilizando crase) pode ser utilizada como string com mais de uma linha
`Linhas 1
Linha 2
Linha 3
Linha 4`
*/
/*Tipo Symbol -> Terá um valor único e umutável*/
//Symbol('nome');

/*Variáveis*/
/*
    __________    ____________    ____________
    |        |   |           |    |          |
    |  '30'  |   | 'Geovani' |    |  "Azul"  | 
    |        |   |           |    |          |
    |________|   |___________|    |__________|
       Idade         Nome              Cor

Declaração de variável de duas formas: let e var
 1 - Início -> letras, cifrão($) e underscore(_)
 2 - Conter -> letras, cifrão($) e underscore(_)
 3 - Não pode ser usado palavras reservadas. (of, if, while, typeof, ...)
 4 - Case sensitive
 5 - Padrão utilizado Camel Case -> nomeDoUsuario (depois da primeira palavra e as próximas maiúsculas)
*/

let cor = 'Azul';
let nome = 'Geovani';
let idade = 39;
let casado = false;
console.log(cor);
console.log(typeof cor);

console.log(nome);
console.log(typeof nome);

console.log(idade);
console.log(typeof idade);

console.log(casado);
console.log(typeof casado);

/*Declaração de múltiplas variáveis*/
/*
let nomeUsuario = 'Geovani';
let idadeUsuario = 39;
*/

let nomeUsuario = 'Geovani',
    idadeUsuario = 39,
    corUsuario = 'Azul';

/*Alterar valor de variável*/
idadeUsuario = 40;

/*Diferença entre let, var, e const
* Declarações Mutáveis : let e var
* Declaração Imutáveis : const
*/
const nome2 = "Geovani";
console.log(nome2);

/*Atributos de atribuição*/
let age = 29;
//age = age + 1;
age += 1;
console.log(age);

let texto = 'oi';
//texto = texto + ' tudo bem?';
texto += ' tudo bem ?';
console.log(texto);

/*Incrementando e Decrementando*/
let anos = 25;
//anos += 1;
anos++;
anos--;

console.log(anos);
console.log(anos++); //Incremento ou decremento executa primeiro o valor da variável e depois incrementa, ou decrementa.
console.log(anos); //Por isso que aqui o valor aumentou.
//Para que seja feito primeiro a incrementação/decrementação deve-se colocar na frente, ex:
console.log(++anos);

/*Tomade de decisão*/
let hora = 10,
    mensagem = '';

if (hora <12)
{
    mensagem = 'Bom Dia';
}
else if (hora >= 18 && hora< 18)
{
    mensagem = 'Boa Tarde'
}
else
{
    mensagem = 'Boa Noite';
}
console.log(mensagem);

/*Switch*/

let mes = 12,
    nomeMes = '';

switch ( mes ) {
    case 1: 
        nomeMes = 'Janeiro'; 
        break;
    case 2: 
        nomeMes = 'Fevereiro'; 
        break;
    case 3: 
        nomeMes = 'Março'; 
        break;
    case 4: 
        nomeMes = 'Abril'; 
        break;
    case 5: 
        nomeMes = 'Maio'; 
        break;
    case 6: 
        nomeMes = 'Junho'; 
        break;
    case 7: 
        nomeMes = 'Julho'; 
        break;
    case 8: 
        nomeMes = 'Agosto'; 
        break;
    case 9: 
        nomeMes = 'Setembro'; 
        break;
    case 10: 
        nomeMes = 'Outubro'; 
        break;
    case 11: 
        nomeMes = 'Novembro'; 
        break;
    case 12: 
        nomeMes = 'Dezembro'; 
        break;
    default: 
        nomeMes = 'Mês inválido';
}

console.log(nomeMes);

let valor = 7;


   // Insira seu código aqui
   if (valor % 2 === 0)
    {
        console.log('Par');
    }
    else
    {
        console.log('Impar');
    }

    let conceito = "";
let nota1 = 7,
    nota2 = 3,
    nota3 = 10,
    nota4 = 3;

    // Insira o código aqui
    let media = (nota1 + nota2 + nota3 + nota4) / 4;
    if (media >= 9 && media <= 10)
    {
        conceito = "A";
    }
    else if (media >= 7.5 && media <= 8.9)
    {
        conceito = "B";
    }
    else if (media >= 6 && media <= 7.4)
    {
        conceito = "C";
    }
    else if (media >= 4 && media <= 5.9)
    {
        conceito = "D";
    }
    else if (media < 4)
    {
        conceito = "F";
    }

    console.log(media);
    console.log(conceito);

    /*Laços de repetição - FOR*/ 

    for(let i = 0; i <= 10; i++)
    {
        console.log(`${i} x 2 = ${i * 2}`);
    }

console.log('');

    for(let y = 0; y <= 3; y++)
    {
        for(let w = 0; w <= 10; w++)
        {
            console.log(`${y} x ${w} = ${y * w}`);
        }
        console.log('');
    }

    /*Laços de repetição - WHILE*/ 
    let contador = 1,
        palavra = 'Geovani';
    while (contador <= palavra.length){
        console.log(contador++); // Primeiro imprime, e depois incrementa a variável.
    }

/*Laços de repetição - DO WHILE*/
console.log('');
let numero = 1;
do
{
    console.log('Repedição - ' + numero++);
}while(numero < 1)

/*Controlando laços de repetição com CONTINUE e BREAK*/
console.log('');
for (let z = 0; z <= 10; z++)
{
    if (z === 5)
    {
        continue;
    }
    console.log(z);
}