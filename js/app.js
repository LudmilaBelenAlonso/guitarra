(function(){
    var winsize = $(window).width()
    var mobile = 720
    var hrefAccMobile = 'galeria.html'
    var btnAccesoGaleria = $('#btnAccesoGaleria')
    
    
    if (winsize < mobile) {
          btnAccesoGaleria.attr('href', hrefAccMobile);
          console.log('Galeria para mobile');
        }else{
          console.log('galeria con carrusel');
          btnAccesoGaleria.attr('href', '#galeria'); 

        } 
  
}
)()