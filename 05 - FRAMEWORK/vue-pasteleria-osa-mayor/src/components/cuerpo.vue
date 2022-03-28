<template>

 <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6">

    <section class="my-5 py-5" id="sec-Menu">

      <div class="container">
        <div class="row">
          <div class="row justify-content-center text-center my-sm-5">
            <div class="col-lg-6">
              <span class="badge bg-primary mb-3"> Destacados </span>
              <h2 class="text-dark mb-0"> NUESTROS ESPECIALES </h2>
              <p class="lead"> Acompáñanos a dar La Vuelta al Mundo, un recorrido por los postres más exquisitos de
                distintos países. Primera parada: Francia. </p>
            </div>
          </div>
        </div>
      </div>

      <div class="container mt-sm-5 mt-3">

        <galeria/>

       <formulario/>

      </div>

    </section>

  </div>

</template>

<script>

import galeria from '../components/galeria.vue'
import formulario from '../components/formulario.vue'


export default {
  components: {galeria, formulario },
  name: 'cuerpo',
  component:{
  galeria, formulario
  }

}
</script>