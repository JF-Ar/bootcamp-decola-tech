function calculator(){
    const operacao = Number(prompt("Escolha a operação: \n 1- SOMA(+)\n 2- SUBTRAÇÃO(-)\n 3- MULTIPLICAÇÃO(+)\n 4- DIVISÃO(:)\n 5- POTÊNCIA(**)"));
    if (!operacao || operacao > 5){
        alert ('Error - Operação inválida. Digite apenas os NUMEROS apresentados');
        calculator();
    } else{
        let number = Number(prompt("Digite o primeiro valor: "));
        let number2 = Number(prompt("Digite o segundo valor: "));
        let result;
        if (!number || !number2){
            alert('Error - Digite apenas numeros')
            calculator();
        }else{
            function soma(){
                result = number+number2;
                alert(`${number} + ${number2} = ${result}`);
            }
            function subtracao(){
                result = number - number2;
                alert(`${number} - ${number2} = ${result}`);
            }
            function multiplica(){
                result = number * number2;
                alert(`${number} x ${number2} = ${result}`);
                novaOperacao();
            }
            function divisao(){
                result = number / number2;
                alert(`${number} / ${number2} = ${result}`);
                novaOperacao();
            }
            function potencia(){
                result = number ** number2;
                alert(`${number}ˆ${number2} = ${result}`);
                novaOperacao();
            }
            function novaOperacao(){
                let opcao = prompt("Deseja fazder outroa opetação?\n 1- SIM \n 2-Não");
                if (opcao == 1){
                    calculator();
                }else if (opcao==2){
                    alert('Volte sempre.');
                }else{
                    alert('Digite uma opção válida');
                    novaOperacao();
                }
            }
        }

        if (operacao == 1){
            soma();
        } else if (operacao == 2){
            subtracao();
        } else if (operacao == 3){
            multiplica();
        } else if (operacao == 4){
            divisao();
        } else if (operacao == 5){
            potencia();
        }
    }
}
calculator();