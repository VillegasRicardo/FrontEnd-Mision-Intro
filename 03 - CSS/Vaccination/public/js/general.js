
 $('.swalDefaultSuccess').click(function () {
  Toast.fire({
      icon: 'success',
      title: '&nbsp;&nbsp; Correo enviado correctamente.'
  })
});

$('.swalDefaultError').click(function () {
  Toast.fire({
      icon: 'error',
      title: '&nbsp;&nbsp; No se envio el correo.'
  })
});

function ScrollTo(name) {
  //init thread
  ScrollToResolver(document.getElementById(name));
} 

function llamaralancla(url){
  document.location.href = "documento.php#ancla";
  }

















