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

        <div class="row" >

          <div class="col-lg-3">
            <div class="position-sticky pb-lg-5 pb-3 mt-lg-0 mt-5 ps-2" style="top: 100px">
              <h3>Pedidos</h3>
              <h6 class="text-secondary font-weight-normal pe-3">Aqui se encunetra los estatus de los pedidos.</h6>
            </div>
          </div>

          <div class="col-lg-9">
            <div class="row mt-3" id="sec-Pedidos">
              <!-- [Lista de pedidos] -->
              <div class="col-12">
                <div class="card">
                  <div class="table-responsive">
                    <table class="table align-items-center mb-0">
                      <thead>
                        <tr>
                          <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Cliente</th>
                          <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Sabores
                          </th>
                          <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                            Decoración</th>
                          <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                            Fecha de Entrega</th>
                          <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"> Extra</th>
                          <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"> Estatus</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div class="d-flex px-2 py-1">
                              <div class="d-flex flex-column justify-content-center">
                                <h6 class="mb-0 text-xs">John Michael</h6>
                                <p class="text-xs text-secondary mb-0">ejemplo.com</p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p class="text-xs text-secondary mb-0">Chocolate, Vainilla</p>
                          </td>
                          <td>
                            <p class="text-xs text-secondary mb-0">Crema chantillí,Chocolate</p>
                          </td>
                          <td class="align-middle text-center">
                            <span class="text-secondary text-xs font-weight-normal">23/04/18</span>
                          </td>
                          <td class="align-middle">
                            Tarjeta de Felicitación
                          </td>
                          <td class="align-middle">
                            <p class="badge badge-pill bg-gradient-primary">Pendiente</p>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <div class="d-flex px-2 py-1">

                              <div class="d-flex flex-column justify-content-center">
                                <h6 class="mb-0 text-xs">Alexa Liras</h6>
                                <p class="text-xs text-secondary mb-0">alexa@ejemplo.com</p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p class="text-xs text-secondary mb-0">Moka</p>
                          </td>
                          <td>
                            <p class="text-xs text-secondary mb-0">Crema chantillí, Fruta de Temporada</p>
                          </td>
                          <td class="align-middle text-center">
                            <span class="text-secondary text-xs font-weight-normal">11/01/19</span>
                          </td>
                          <td class="align-middle">
                            Tarjeta de Felicitación
                          </td>
                          <td class="align-middle">
                            <p class="badge badge-pill bg-gradient-primary">Pendiente</p>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <div class="d-flex px-2 py-1">

                              <div class="d-flex flex-column justify-content-center">
                                <h6 class="mb-0 text-xs">Laurent Perrier</h6>
                                <p class="text-xs text-secondary mb-0">laurent@ejemplo.com</p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p class="text-xs text-secondary mb-0">Zarzamora,Fresa</p>
                          </td>
                          <td>
                            <p class="text-xs text-secondary mb-0">Crema chantillí,Fresas</p>
                          </td>
                          <td class="align-middle text-center">
                            <span class="text-secondary text-xs font-weight-normal">19/09/17</span>
                          </td>
                          <td class="align-middle">
                            Flores
                          </td>
                          <td class="align-middle">
                            <p class="badge badge-pill bg-gradient-primary">Pendiente</p>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <div class="d-flex px-2 py-1">

                              <div class="d-flex flex-column justify-content-center">
                                <h6 class="mb-0 text-xs">Michael Levi</h6>
                                <p class="text-xs text-secondary mb-0">michael@ejemplo.com</p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p class="text-xs text-secondary mb-0">Vainilla</p>
                          </td>
                          <td>
                            <p class="text-xs text-secondary mb-0">Crema chantillí, Zarzamoras</p>
                          </td>
                          <td class="align-middle text-center">
                            <span class="text-secondary text-xs font-weight-normal">24/12/08</span>
                          </td>
                          <td class="align-middle">
                            Nombre del festejado
                          </td>
                          <td class="align-middle">
                            <p class="badge badge-pill badge-lg bg-gradient-success">Entragado</p>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <div class="d-flex px-2 py-1">

                              <div class="d-flex flex-column justify-content-center">
                                <h6 class="mb-0 text-xs">Richard Gran</h6>
                                <p class="text-xs text-secondary mb-0">richard@ejemplo.com</p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p class="text-xs text-secondary mb-0">Chocolate</p>
                          </td>
                          <td>
                            <p class="text-xs text-secondary mb-0">Crema chantillí, Bombones</p>
                          </td>
                          <td class="align-middle text-center">
                            <span class="text-secondary text-xs font-weight-normal">04/10/21</span>
                          </td>
                          <td class="align-middle">
                            Tarjeta de Felicitación
                          </td>
                          <td class="align-middle">
                            <p class="badge badge-pill badge-lg bg-gradient-success">Entragado</p>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <div class="d-flex px-2 py-1">

                              <div class="d-flex flex-column justify-content-center">
                                <h6 class="mb-0 text-xs">Miriam Eric</h6>
                                <p class="text-xs text-secondary mb-0">miriam@ejemplo.com</p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p class="text-xs text-secondary mb-0">Fresa</p>
                          </td>
                          <td>
                            <p class="text-xs text-secondary mb-0">Fresas, Crema chantillí, Zarzamoras</p>
                          </td>
                          <td class="align-middle text-center">
                            <span class="text-secondary text-xs font-weight-normal">14/09/20</span>
                          </td>
                          <td class="align-middle">
                            Nombre del festejado
                          </td>
                          <td class="align-middle">
                            <p class="badge badge-pill bg-gradient-primary">Pendiente</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div class="py-4"></div>

            </div>

          </div>

        </div>

        <!--[Almacen]-->
        <div class="row pt-lg-6" id="sec-Almacen">
          <div class="col-lg-3">
            <div class="position-sticky pb-lg-5 pb-3 mt-lg-0 mt-5 ps-2" style="top: 100px">
              <h3>Ingresdientes en almacen</h3>
              <h6 class="text-secondary font-weight-normal pe-3"> Aqui se podra visualizar un aproximado de ingredientes
                almacenados</h6>
            </div>
          </div>
          <div class="col-lg-9">

            <div class="row mt-3">
              <!-- Alerts -->
              <div class="col-12">
                <div class="card">
                  <div class="table-responsive">
                    <table class="table align-items-center mb-0">
                      <thead>
                        <tr>
                          <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Ingrediente</th>
                          <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Cantidad</th>                         
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div class="d-flex px-2 py-1">
                              <div class="d-flex flex-column justify-content-center">
                                <h6 class="mb-0 text-xs">Fresas</h6>                              
                              </div>
                            </div>
                          </td>
                          <td>
                            <p class="text-xs text-secondary mb-0">15.5 Kg.</p>
                          </td>                         
                        </tr>

                        <tr>
                          <td>
                            <div class="d-flex px-2 py-1">

                              <div class="d-flex flex-column justify-content-center">
                                <h6 class="mb-0 text-xs">Chocolate</h6>
                               
                              </div>
                            </div>
                          </td>
                          <td>
                            <p class="text-xs text-secondary mb-0">21.5 Kg.</p>
                          </td>
                         
                        </tr>

                        <tr>
                          <td>
                            <div class="d-flex px-2 py-1">

                              <div class="d-flex flex-column justify-content-center">
                                <h6 class="mb-0 text-xs">Mango</h6>
                                
                              </div>
                            </div>
                          </td>
                          <td>
                            <p class="text-xs text-secondary mb-0">7.5 Kg. </p>
                          </td>
                          
                        </tr>

                        <tr>
                          <td>
                            <div class="d-flex px-2 py-1">

                              <div class="d-flex flex-column justify-content-center">
                                <h6 class="mb-0 text-xs">Crema chantillí</h6>
                                
                              </div>
                            </div>
                          </td>
                          <td>
                            <p class="text-xs text-secondary mb-0">10 Kg.</p>
                          </td>
                         
                        </tr>

                        <tr>
                          <td>
                            <div class="d-flex px-2 py-1">

                              <div class="d-flex flex-column justify-content-center">
                                <h6 class="mb-0 text-xs">Bombones</h6>
                               
                              </div>
                            </div>
                          </td>
                          <td>
                            <p class="text-xs text-secondary mb-0">8 Cajas</p>
                          </td>
                         
                        </tr>

                        <tr>
                          <td>
                            <div class="d-flex px-2 py-1">

                              <div class="d-flex flex-column justify-content-center">
                                <h6 class="mb-0 text-xs">Azucar</h6>
                               
                              </div>
                            </div>
                          </td>
                          <td>
                            <p class="text-xs text-secondary mb-0">30 Kg.</p>
                          </td>
                     
                        </tr>
                        <tr>
                          <td>
                            <div class="d-flex px-2 py-1">

                              <div class="d-flex flex-column justify-content-center">
                                <h6 class="mb-0 text-xs">Harina</h6>
                               
                              </div>
                            </div>
                          </td>
                          <td>
                            <p class="text-xs text-secondary mb-0">50 Kg.</p>
                          </td>
                     
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

            </div>


          </div>
        </div>

      </div>
    </section>

  </div>

</template>

<script>



export default { 
  name: 'cuerpo2',
}
</script>