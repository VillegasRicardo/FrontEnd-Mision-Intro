<template>
  <div class="home">
    
   <menuHeader2/>
   <carrusel2/>
   <cuerpo2/>


   <piedepagina/>

  </div>
</template>

<script>
import menuHeader2 from '../components/menuHeader2.vue'
import carrusel2 from '../components/carrusel2.vue'
import cuerpo2 from '../components/cuerpo2.vue'
import piedepagina from '../components/piedepagina.vue'


export default {
  components:{menuHeader2,carrusel2,cuerpo2,piedepagina},
  name: 'HomeView',
  components: {
    menuHeader2,
    carrusel2,
    cuerpo2,
    piedepagina
  }
}
</script>