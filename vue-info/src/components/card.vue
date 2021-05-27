<template>
   <div class="card"  >
      <slot></slot> 
   </div> 
</template>

<script>
export default {
  name: "card",
}
</script>

<style scoped>
.card{
    box-shadow: 0 4px 8px black;
    transition: 0.3s;
    padding: 16px;
    margin-bottom: 20px;
    margin-left: 20px;
    margin-top: 15px;
    width: 350px;
    background:white;
    display: flex;

}

.card:hover{
    box-shadow: 0 8px 16px 0 black;
}
</style>
