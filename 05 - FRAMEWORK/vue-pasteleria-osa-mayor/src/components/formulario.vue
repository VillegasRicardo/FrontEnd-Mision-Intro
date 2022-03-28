<template>

 <!--[Pedido]-->
        <div class="row pt-lg-6" id="sec-Pedido">
          <div class="col-lg-3">
            <div class="position-sticky pb-lg-5 pb-3 mt-lg-0 mt-5 ps-2" style="top: 100px">
              <h3>HAZ TU PEDIDO</h3>
              <h6 class="text-secondary font-weight-normal pe-3"> Porque tu evento es especial armalo a tu gusto para
                que esa sea inolvidable.</h6>
            </div>
          </div>
          <div class="col-lg-9">

            <div class="row mt-3">
              <!-- Alerts -->
              <div class="col-12">
                <div class="position-relative border-radius-xl overflow-hidden shadow-lg mb-7">
                  <div class="container border-bottom">
                    <div class="row justify-space-between py-2">
                      <div class="col-lg-3 me-auto">
                        <p class="lead text-dark pt-1 mb-0">Datos Generales</p>
                      </div>
                    </div>
                  </div>
                  <div class="tab-content tab-space">

                    <div class="p-4">
                      <form>
                        <div class="row">
                          <div class="col-md-4">
                            <div class="input-group input-group-dynamic mb-4">
                              <label class="form-label">Nombre:</label>
                              <input type="text" class="form-control">
                            </div>
                          </div>
                          <div class="col-md-4">
                            <div class="input-group input-group-dynamic mb-4">
                              <label class="form-label">Apellido Paterno:</label>
                              <input type="text" class="form-control">
                            </div>
                          </div>
                          <div class="col-md-4">
                            <div class="input-group input-group-dynamic mb-4">
                              <label class="form-label">Apellido Materno:</label>
                              <input type="text" class="form-control">
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-4">
                            <div class="input-group input-group-dynamic mb-4">
                              <label class="form-label">Telefono:</label>
                              <input type="text" class="form-control">
                            </div>
                          </div>
                          <div class="col-md-4">
                            <div class="input-group input-group-dynamic mb-4">
                              <label class="form-label">Correo Electronico:</label>
                              <input type="text" class="form-control">
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-12">
                            <div class="input-group input-group-dynamic">
                              <textarea class="form-control" rows="3" placeholder="Descripción General del Pastel:"
                                spellcheck="false"></textarea>
                            </div>
                          </div>
                        </div>
                        <div class="py-3"></div>
                        <!--[Seleccionar Pastel]-->
                        <div class="container border-bottom">
                          <div class="row justify-space-between py-2">
                            <div class="col-lg-3 me-auto">
                              <p class="lead text-dark pt-1 mb-0">Selecciona tu pastel.</p>
                            </div>
                          </div>
                        </div>
                        <div class="row m-3">
                          <div class="col-md-4">
                            <div class="form-check form-switch m-2">
                              <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
                              <label class="form-check-label" for="flexSwitchCheckDefault">Pastel Especial de Frutos
                                Rojos</label>
                            </div>
                            <div class="form-check form-switch m-2">
                              <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
                              <label class="form-check-label" for="flexSwitchCheckDefault">Pastel Ferrero Rocher
                                (Limitado)</label>
                            </div>
                            <div class="form-check form-switch m-2">
                              <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
                              <label class="form-check-label" for="flexSwitchCheckDefault">BOBE</label>
                            </div>
                          </div>
                          <div class="col-md-4">
                            <div class="form-check form-switch m-2">
                              <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
                              <label class="form-check-label" for="flexSwitchCheckDefault">Pastel Red Velvet</label>
                            </div>
                            <div class="form-check form-switch m-2">
                              <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
                              <label class="form-check-label" for="flexSwitchCheckDefault">Pastel Oreo</label>
                            </div>
                            <div class="form-check form-switch m-2">
                              <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
                              <label class="form-check-label" for="flexSwitchCheckDefault">Pastel Mil Hojas</label>
                            </div>
                          </div>
                          <div class="col-md-4">
                            <div class="form-check form-switch m-2">
                              <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
                              <label class="form-check-label" for="flexSwitchCheckDefault">Pastel de Elote</label>
                            </div>
                            <div class="form-check form-switch m-2">
                              <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
                              <label class="form-check-label" for="flexSwitchCheckDefault">Pastel Tres Leches</label>
                            </div>
                          </div>
                        </div>
                        <!--[Armar Pastel]-->
                        <div class="container border-bottom">
                          <div class="row justify-space-between py-2">
                            <div class="col-lg-3 me-auto">
                              <p class="lead text-dark pt-1 mb-0">Arma tu pastel.</p>
                            </div>
                          </div>
                        </div>
                        <div class="row m-3">
                          <div class="col-md-4">
                            Seleccione el sabor:
                            <div class="form-check form-switch m-2">
                              <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
                              <label class="form-check-label" for="flexSwitchCheckDefault">Chocolate</label>
                            </div>
                            <div class="form-check form-switch m-2">
                              <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
                              <label class="form-check-label" for="flexSwitchCheckDefault">Fresa</label>
                            </div>
                            <div class="form-check form-switch m-2">
                              <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
                              <label class="form-check-label" for="flexSwitchCheckDefault">Zarzamora</label>
                            </div>
                            <div class="form-check form-switch m-2">
                              <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
                              <label class="form-check-label" for="flexSwitchCheckDefault">Vainilla</label>
                            </div>
                            <div class="form-check form-switch m-2">
                              <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
                              <label class="form-check-label" for="flexSwitchCheckDefault">Cajeta</label>
                            </div>
                            <div class="form-check form-switch m-2">
                              <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
                              <label class="form-check-label" for="flexSwitchCheckDefault">Mola</label>
                            </div>
                          </div>
                          <div class="col-md-4">
                            Seleccione la decoracion:
                            <div class="form-check form-switch m-2">
                              <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
                              <label class="form-check-label" for="flexSwitchCheckDefault">Crema chantillí</label>
                            </div>
                            <div class="form-check form-switch m-2">
                              <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
                              <label class="form-check-label" for="flexSwitchCheckDefault">Chocolate</label>
                            </div>
                            <div class="form-check form-switch m-2">
                              <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
                              <label class="form-check-label" for="flexSwitchCheckDefault">Frutos Rojos</label>
                            </div>
                            <div class="form-check form-switch m-2">
                              <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
                              <label class="form-check-label" for="flexSwitchCheckDefault">Bombones</label>
                            </div>
                            <div class="form-check form-switch m-2">
                              <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
                              <label class="form-check-label" for="flexSwitchCheckDefault">Chispas de chocolate</label>
                            </div>
                            <div class="form-check form-switch m-2">
                              <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
                              <label class="form-check-label" for="flexSwitchCheckDefault">Fruta de Temporada</label>
                            </div>
                          </div>
                          <div class="col-md-4">
                            Decoración Extra
                            <div class="form-check form-switch m-2">
                              <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
                              <label class="form-check-label" for="flexSwitchCheckDefault">Tarjeta de Felicitación</label>
                            </div>
                            <div class="form-check form-switch m-2">
                              <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
                              <label class="form-check-label" for="flexSwitchCheckDefault">Flores</label>
                            </div>
                            <div class="form-check form-switch m-2">
                              <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
                              <label class="form-check-label" for="flexSwitchCheckDefault">Nombre del festejado</label>
                            </div>
                          </div>
                        </div>

                        <div class="row d-flex justify-content-center m-3">
                          <div class="col-md-4 d-flex justify-content-center">
                            <input type="submit" class="btn btn-primary" text="Enviar">
                          </div>
                        </div>


                      </form>
                    </div>

                  </div>
                </div>
              </div>

            </div>


          </div>
        </div>

</template>

<script>
export default {
   name: 'formulario'
}
</script>