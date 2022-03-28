<template>
   <!--[Navbar]-->
  <div class="container position-sticky z-index-sticky top-0">
    <div class="row">
      <div class="col-12">
        <nav
          class="navbar navbar-expand-lg  blur border-radius-xl top-0 z-index-fixed shadow position-absolute my-3 py-2 start-0 end-0 mx-4">
          <div class="container-fluid px-0">
            <a class="navbar-brand font-weight-bolder ms-sm-3" href="javascript:void(0);" rel="tooltip"
              title="Designed and Coded by Creative Tim" data-placement="bottom" target="_blank">
              <img src="recursos/img/logos/logoTransparenteAlterno2.png" class="img-tamHeader"
                alt="logo Pasteleria OSA Mayor">
            </a>
            <button class="navbar-toggler shadow-none ms-2" type="button" data-bs-toggle="collapse"
              data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false"
              aria-label="Toggle navigation">
              <span class="navbar-toggler-icon mt-2">
                <span class="navbar-toggler-bar bar1"></span>
                <span class="navbar-toggler-bar bar2"></span>
                <span class="navbar-toggler-bar bar3"></span>
              </span>
            </button>
            <div class="collapse navbar-collapse pt-3 pb-2 py-lg-0 w-100" id="navigation">
              <ul class="navbar-nav navbar-nav-hover ms-auto">

                <li class="nav-item">
                  <a class="nav-link" href="/">
                    <!--<span class="material-icons"> directions_run </span> <b>Actividades</b>-->
                    <i class="material-icons">home</i> <b>INICIO</b>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/PasteleriaOsaMayor/Vistas/#sec-Pedidos">
                    <!--<span class="material-icons"> directions_run </span> <b>Actividades</b>-->
                    <span class="material-icons">list</span> <b>PEDIDOS</b>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/PasteleriaOsaMayor/Vistas/#sec-Almacen">
                    <!--<span class="material-icons"> directions_run </span> <b>Actividades</b>-->
                    <span class="material-icons">
                      cookie
                    </span> <b>ALMACEN</b>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <!-- End Navbar -->
      </div>
    </div>
  </div>

</template>

<script>
export default {
   name: 'menuHeader'
}
</script>