const isValid = new RegExp(/^[01]+$/g)

// aqui atribui à const binary um valor de binário
const input = "11001";

// nomeei a função que recebe um número como parâmetro para execução um número binário
function binaryToDecimal(binary){
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

    // esse método parseInt é um módulo nativo do nodeJs que faz a conversão de binário para 
    // decimal passando como parâmetro o dado de binário e um valor para a base 
    // no caso (a base do número binário é 2, de número octadecimal é 8, de hexadecimal é 16) 
    return parseInt(binary, 2)
}

// a esse log chama a função criada passando o input como parâmetro
console.log(binaryToDecimal(input))

