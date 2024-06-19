<script>
import { Operator } from '../util/Calculator';
import { Calculator } from '../util/Calculator';


  export default{
    data(){
      return{
        keyboard1:['1', '2', '3', '+'],
        keyboard2:['4', '5', '6', '-'],
        keyboard3:['7', '8', '9', '*'],
        keyboard4:['.', '0', '=', '/'],
        inputDisplay: '',
        reset:['C'],
        operator:null,
        inputOperator: Operator,
        number1: '',
        number2: '',
        result: new Calculator(),
      }
    },
    methods:{
      inputData(value){
        
        if(!NaN || value === '.'){
          value = this.correctBeginningWithDot(value);
          this.inputDisplay += value + '';

          if(['+', '-', '*', '/'].includes(this.operator)){

            if(['=','+', '-', '*', '/'].includes(value)){
              this.checkOperation()
              this.number1 = this.inputDisplay;
              this.number2 = '';
              this.operator = null;
            }else{
              this.number2 = this.correctBeginningWithDot(this.number2);
              this.number2 += value;
            }

          }else{

            if(['+', '-', '*', '/'].includes(value)){
              this.operator = value;
              this.inputDisplay = ' ';
            }else if(value === '='){
              this.checkOperation()
              this.number1 = this.inputDisplay;
              this.number2 = '';
              this.operator = null;
            }else{
              if(this.number1 !== ''){
                this.inputDisplay = ' ';
                this.number1 = value;
                this.inputDisplay += value + '';
              }else{
                this.number1 = this.correctBeginningWithDot(this.number1);
                this.number1 += value;
              }
            }

          }
        }
      },
      clearDisplay(){
          this.inputDisplay = '';
          this.number1 = '';
      },
      correctBeginningWithDot(number){
        if(number[0] ===  '.'){
          return '0.';
        }else{
          return number;
        }
      },
      checkOperation(){
        switch(this.operator){
          case this.inputOperator.add:{
            if(this.number1 === ''){
              this.inputDisplay = this.result.operation(0, Number(this.number2) , this.inputOperator.add);
            }else if(this.number2 === ''){
              this.inputDisplay = this.result.operation(Number(this.number1), 0, this.inputOperator.add);
            }else{
              this.inputDisplay = this.result.operation(Number(this.number1),Number(this.number2),this.inputOperator.add);
            }
            break;
          }
          case this.inputOperator.sub:{
            if(this.number1 === ''){
              this.inputDisplay = this.result.operation(0, Number(this.number2) , this.inputOperator.sub);
            }else if(this.number2 === ''){
              this.inputDisplay = this.result.operation(Number(this.number1), 0, this.inputOperator.sub);
            }else{
              this.inputDisplay = this.result.operation(Number(this.number1),Number(this.number2),this.inputOperator.sub);
            }
            break;
          }
          case this.inputOperator.mult:{
            if(this.number1 === ''){
              this.inputDisplay = this.result.operation(0, Number(this.number2) , this.inputOperator.mult);
            }else if(this.number2 === ''){
              this.inputDisplay = this.result.operation(Number(this.number1), 0, this.inputOperator.mult);
            }else{
              this.inputDisplay = this.result.operation(Number(this.number1),Number(this.number2),this.inputOperator.mult);
            }
            break;
          }
          case this.inputOperator.div:{
            if(this.number1 === ''){
              this.inputDisplay = this.result.operation(0, Number(this.number2) , this.inputOperator.div);
            }else if(this.number2 === ''){
              this.inputDisplay = this.result.operation(Number(this.number1), 0, this.inputOperator.div);
            }else{
              this.inputDisplay = this.result.operation(Number(this.number1),Number(this.number2),this.inputOperator.div);
            }
            break;
          }
        }
      }
    }
  }
</script>


<template>
  <div class = "continer">
    <div class = "display">
      {{ inputDisplay || 0}}
    </div>

    <div class="buttons">

      <div class="row">
        <div class="col-auto">
          <button class="reset" :id = "reset" @click="clearDisplay()" v-for = "button in reset">{{ button }}</button>
        </div>
      </div>

      <div class="row">
        <div class="col-auto">
          <button class="btn" @click="inputData(buttom)" v-for="buttom in keyboard1">{{ buttom }}</button>
        </div>
      </div>

      <div class="row">
        <div class="col-auto">
          <button class="btn" @click="inputData(buttom)" v-for="buttom in keyboard2">{{ buttom }}</button>
        </div>
      </div>

      <div class="row">
        <div class="col-auto">
          <button class="btn" @click="inputData(buttom)" v-for="buttom in keyboard3">{{ buttom }}</button>
        </div>
      </div>

      <div class="row">
        <div class="col-auto">
          <button class="btn" @click="inputData(buttom)" v-for="buttom in keyboard4">{{ buttom }}</button>
        </div>
      </div>
    </div>
  </div>


</template>


<style>
</style>