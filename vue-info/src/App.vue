<template>
  <div id="app">
   <div class="box"   :class="{card: isBox}" >
      <card v-if="isBox">
        <img  src="../8.jpg" width="350px" height="250px"/>
       </card>

      <card v-if="isBox"><b>Web design concepts</b> </card>
      <card v-if="isBox"><h2>Website design with vue...</h2></card>
      
      
  </div>

   <button @click="myFunc">show info</button>

   </div>
</template>

<script>
import card from "./components/card.vue"

export default {
  name: 'App',
  components: {
   card,
  }, 
  data(){
    return{
      isBox:false,
     
    }
    
  },
  methods:{
    myFunc(){
      this.isBox = !this.isBox
    }
  },

  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
 
}
.box {
 width: 500px;
 height: 500px;
 border: 2px solid  yellow;
  box-shadow: 0 4px 8px black;
}
.card{
background: rgb(186, 138, 224);

}
button{
  width: 250x;
  height: 35px;
  background: red;

}


</style>
