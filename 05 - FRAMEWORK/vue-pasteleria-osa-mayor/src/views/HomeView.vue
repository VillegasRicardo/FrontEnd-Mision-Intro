<template>
  <div class="home">
    
   <menuHeader/>
   <carrusel/>
   <cuerpo/>
   <piedepagina/>

  </div>
</template>

<script>
import menuHeader from '../components/menuHeader.vue'
import carrusel from '../components/carrusel.vue'
import cuerpo from '../components/cuerpo.vue'
import piedepagina from '../components/piedepagina.vue'


export default {
  components:{menuHeader,carrusel,cuerpo,piedepagina},
  name: 'HomeView',
  components: {
    menuHeader,
    carrusel,
    cuerpo,
    piedepagina
  }
}
</script>
