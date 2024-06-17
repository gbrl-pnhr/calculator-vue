<script>
  export default{
    data(){
      return{
        keyboard1:['1', '2', '3', '+'],
        keyboard2:['4', '5', '6', '-'],
        keyboard3:['7', '8', '9', '*'],
        keyboard4: [',', '0', '=', '/']
      }
    }
  }
</script>


<template>
  <div class = "continer">
    <div class = "display">
      <form action="">
        <input type="text">
      </form>
    </div>

    <div class="buttons">

      <div class="row">
        <div class="col-auto">
          <button id = "reset">C</button>
        </div>
      </div>

      <div class="row">
        <div class="col-auto">
          <button class="btn" v-for="button in keyboard1">{{ button }}</button>
        </div>
      </div>

      <div class="row">
        <div class="col-auto">
          <button class="btn" v-for="button in keyboard2">{{ button }}</button>
        </div>
      </div>

      <div class="row">
        <div class="col-auto">
          <button class="btn" v-for="button in keyboard3">{{ button }}</button>
        </div>
      </div>

      <div class="row">
        <div class="col-auto">
          <button class="btn" v-for="button in keyboard4">{{ button }}</button>
        </div>
      </div>
    </div>
  </div>


</template>


<style>
</style>