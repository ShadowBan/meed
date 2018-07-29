<template>
  <button @click.prevent="shareThis">Hello World</button>
</template>

<script>
export default {
  name: "ShareButton",
  props: {},
  data: function(){return {}},
  methods: {
    shareThis: function(event) {
      if(navigator.share){
        navigator.share({
          title: "Test Share",
          text: "This is a test share from my site!",
          url: "https://localhost:8080/test-share"
        })
        .then(() => console.log("share worked!"))
        .catch((error) => console.log('Error sharing', error))
      }else{
        console.log("No Navigator Detected!")
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
