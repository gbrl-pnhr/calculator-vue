export class Calculator{
    operation(number1:number, number2:number, operator: Operator){
        switch(operator){
            case '+':{
                return number1 + number2;
            }
            case '-':{
                return number1 - number2;
            }
            case '*':{
                return number1 * number2;
            }
            case '/':{
                if(number2 == 0){
                    return "#ERROR#";
                }else{ 
                    return number1 / number2;
                }
            }
        }
    }
}


export enum Operator{
    add = '+',
    sub = '-',
    mult = '*',
    div = '/',
}
