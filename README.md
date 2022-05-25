# Aprendendo HTML, CSS e JavaScript

Esse repositório foi criado com o objetivo de criar aplicações somente em HTML, CSS e JavaScript para que possamos estudá-las e aprender com elas.

## Projeto

![HTML CSS e JavaScript](https://user-images.githubusercontent.com/6599252/169671524-20a26724-5e54-4303-b63e-e3b2cc06c0fc.png)

## JavaScript

- ✔ [Eventos](#event-listeners-em-javascript)
- ✔ [Operador Ternário](#operador-ternário-em-javascript)
- ✔ [Usando os métodos forEach](#método-foreach-em-javascript)
- ✔ [Arrow Functions](#arrow-functions-em-javascript)
- [] Spread Syntax (`...`)
- [] Métodos querySelector e querySelectorAll
- [] Declarando variáveis com a palavra chave const e let
- [] Adicionando/removendo nomes de classes de um elemento DOM
- [] Diferença entre `currentTarget` e `target`
- [] Template Strings

## CSS

- [x] Transform Property
- [x] Animation Property

## Conceitos e Exemplos dos Métodos e Funções Usadas

### Event Listeners em JavaScript

Nessa seção iremos cobrir apenas os recursos mais básicos da definição de event listeners.

Vamos falar em especial do método `addEventListener` que permite configurar funções que são chamadas quando um evento específico ocorrer. Esse manipulador pode ser anexado a um elemento HTML específico para o qual você deseja monitorar eventos, e o elemento pode ter mais de um manipulador anexado.

Aqui está a sintaxe:

```js
target.addEventListener(event, function, useCapture)
```

- **target:** Elemento HTML
- **function:** Função anônima, que recebe o código para execução
- **useCapture:** Valor padrão `false`

Veja no exemplo abaixo o evento de `click` em um botão:

```js
const button = document.querySelector('#button')

button.addEventListener('click', e => {
  console.log(e)
})
```

### Operador Ternário em JavaScript

O operador condicional ternário atribui um valor a uma variável com base em uma condição, e é o único operador que recebe três operando.

Ele pode ser um substituto para a estrutura condicional *if*, na qual as cláusulas `if` e `else` atribuem valores diferentes ao mesmo campo, por exemplo:

```js
const resultado = ``;
if (condição)
  resultado = 'alguma coisa';
else
  resultado = 'algo mais';
```

O operador ternário encurta essa instrução *if/else* em uma única instrução, assim:

```js
const resultado = (condição) ? 'alguma coisa' : 'algo mais';
```

### Método `forEach` em JavaScript

O método `forEach` é uma das várias maneiras de percorrer arrays. Cada método de iteração tem seus recursos diferentes. Cabe à você decidir qual melhor método para usar.

Considerando que temos o seguinte array:

```js
const numbers = [1, 2, 3, 4, 5];
```

Usar o método tradicional `for loop` para percorrer o array, ficaria assim:

```js
for (i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
```

**Qual a diferença para o método `forEach()`?**

Ele também é usado para percorrer array, mas usa uma abordagem diferente do clássico `for loop`. Pois passa um **callback**, ou seja, uma **função de retorno** para cada elemento do array.

```js
numbers.forEach(function(number) {
  console.log(number);
});
```

### Arrow Functions em JavaScript

O ES6 introduziu o arrow functions, que fornece uma alternativa de escrever uma sintaxe mais curta, em comparação com a expressão da função.

O exemplo abaixo define uma expressão de função, que retorna a soma de dois números:

```js
let add = function (x, y) {
  return x + y;
};

console.log(add(10, 20)); // 30
```

O exemplo a seguir é equivalente a função `add()`, mas agora usando arrow functions:

```js
let add = (x, y) => x + y;

console.log(add(10, 20)); // 30;
```

Se você usar a sintaxe de bloco, precisará acrescentar a palavra-chave `return`:

```js
let add = (x, y) => { return x + y; };
```

## Links

- Design do projeto no Figma: [Link](https://www.figma.com/file/oDQ3sehgATgbsjd7T914Ku/Credit-Cards?node-id=0%3A1)
- Site em produção: [Link](https://card-custom-html.vercel.app)