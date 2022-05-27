// criado um Regex pra verificar se dado passado possui algum dado além de 0 e 1
var isValid = new RegExp(/^[0,1]+$/g)

var input = 11001

function binaryToDecimal(binary: string | number): string | number | Error
{ 
    // criei uma validação que valida se o tip      o do dado inserido é uma string
    // e se não for ele o transforma em uma
    if(binary !== ''){
      binary = String(binary)
  } 
    
  // essa validação bate no regex criado e valida se o dado de input possui algum dado
  // diferente de 0 e 1
  if(!isValid.test(binary)){
      return new Error('Invalid format data! Remember: A binary number does not have letters or any other number but 0 and 1!')
  }
    // criei um array de início que tem como valor o dado inserido 
    // como parâmetro da função, nesse caso um binário
    let num = binary;
    
    // setei o valor do decimal como zero, pois quando o laço finalizar, 
    // o dado convertido será guardado nessa variável
    let decimalValue = 0;
 
    // inicializando com o valor da base em 1
    let base = 1;
  
    //o laço começa a partir do último número do array
    for (let i = num.length - 1; i >= 0; i--) {
      // criei uma condição que quando o valor do índice do array de binário for igual a 1
      // então o decimal value será ele mesmo + o valor da base, até percorrer
      // o binário por completo
        if (num[i] == '1'){
            decimalValue += base;
            console.log('valor da base = ', base)
            console.log('decimal Value = ', decimalValue)
        }
      // e sempre que ele mudar de índice, ele fará o calculo do valor da base 
      // multiplicado por 2, e o resultado será o novo valor da base
        base = base * 2;
    }
    
    
    return decimalValue;
}

var result = binaryToDecimal(input)
console.log(result)