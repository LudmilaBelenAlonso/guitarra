(function(){
    var winsize = $(window).width()
    var mobile = 720
    var bckImage = $('#inicio')
    
    
    if (winsize < mobile) {
          bckImage.css('background-image', '../img/portadaMobile.png' );
          console.log('Galeria para mobile');
        }
}
)()