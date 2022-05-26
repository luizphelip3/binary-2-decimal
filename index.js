// criado um Regex pra verificar se dado passado possui algum dado além de 0 e 1
const isValid = new RegExp(/^[0,1]+$/g)

function binaryToDecimal(binary)
{ 
  // criei uma validação que valida se o tipo do dado inserido é uma string
    // e se não for ele o transforma em uma
    if(typeof(binary) !== String ){
      binary = binary.toString()
  }

  // essa validação bate no regex criado e valida se o dado de input possui algum dado
  // diferente de 0 e 1
  if(!isValid.test(binary)){
      return new Error('Invalid format data! Remember: A binary number does not have letters or any other number but 0 and 1!')
  }
    // defini um dado de início que tem como valor o dado inserido 
    //como parâmetro da função, nesse caso um binário
    let num = binary;
    
    // setei o valor do decimal como zero, pois quando o laço finalizar, 
    //o dado convertido será guardado nessa variável
    let decimalValue = 0;
 
    // inicializando com a base em valor 1
    let base = 1;
  
    // aqui criei uma variável len que corresponde ao tamanho do array do binário passado
    for (let i = num.length - 1; i >= 0; i--) {
      // criei uma condição que quando o valor do índice do array de binário for igual a 1
      // então o valor do decimal será ele mesmo + o valor da base, até percorrer
      // o binário por completo 
        if (num[i] == '1'){
            decimalValue += base;
        }
      // e quando sair do if o valor da base (no caso 1) vai ser multiplicado por 2
        base = base * 2;
    }
 
    return decimalValue;
}

let input = 10110101
console.log(binaryToDecimal(input))