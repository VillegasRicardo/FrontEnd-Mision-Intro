<template>
<!--[Carrusel]-->
  <header class="header-2">
    <div class="page-header min-vh-75 relative" style="background-image: url('recursos/img/background/bg-01.jpg')">
      <span class="mask bg-gradient-primary opacity-4"></span>
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center mx-auto">

            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner mb-4">
                <div class="carousel-item">
                  <div class="page-header min-vh-75 m-3 border-radius-xl"
                    style="background-image: url('recursos/img/fotos/img-carrusel-06.jpg');">
                    <span class="mask "></span>
                    <div class="container">
                      <div class="row">
                        <div class="col-lg-6 my-auto">
                          <h1 class="text-white fadeIn2 fadeInBottom">Pastel Especial de Frutos Rojos</h1>
                          <p class="lead text-white opacity-8 fadeIn3 fadeInBottom">Inolvidable pastel de frutos rojos
                            cubierto
                            con nuestra tradicional mermelada de fresa.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="page-header min-vh-75 m-3 border-radius-xl"
                    style="background-image: url('recursos/img/fotos/img-carrusel-02.jpg');">
                    <span class="mask"></span>
                    <div class="container">
                      <div class="row">
                        <div class="col-lg-6 my-auto">
                          <h1 class="text-white fadeIn2 fadeInBottom">Pastel Ferrero Rocher (Limitado)</h1>
                          <p class="lead text-white opacity-8 fadeIn3 fadeInBottom">Exquisita combinación de pastel de
                            queso con brownie,
                            cubierto con ganache de chocolate semi-amargo.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item active">
                  <div class="page-header min-vh-75 m-3 border-radius-xl"
                    style="background-image: url('recursos/img/fotos/img-carrusel-04.jpg');">
                    <span class="mask"></span>
                    <div class="container">
                      <div class="row">
                        <div class="col-lg-6 my-auto">
                          <h1 class="text-white fadeIn2 fadeInBottom">BOBE</h1>
                          <p class="lead text-white opacity-8 fadeIn3 fadeInBottom">Pastel de chocolate con nuez, bañado
                            con leche
                            y cubierto con un delicioso betún de cacao..</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="min-vh-75 position-absolute w-100 top-0">
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon position-absolute bottom-50" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
                  <span class="carousel-control-next-icon position-absolute bottom-50" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </a>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  </header>

</template>

<script>
export default {
   name: 'carrusel'
}
</script>