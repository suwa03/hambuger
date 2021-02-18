$(function( ){
      //サイドバー開く時
      $( ".c-button__menu" ).on( "click", function() {
        $( ".l-sidebar" ).addClass( "is-open" );
        $( ".c-button__close" ).addClass( "is-open" );
        $(".js-fade-layer").css("visibility","visible");
        $( ".js-body" ).css("overflow" , "hidden")
        $( ".l-sidebar" ).css( 'visibility' , 'visible' );
      } );
     // サイドバー閉じるとき
      $( ".c-button__close" ).on( "click", function() {
        $( ".l-sidebar" ).removeClass( "is-open" );
        $( ".c-button__close" ).removeClass( "is-open" );
        $(".js-fade-layer").css("visibility","hidden");
        $( ".js-body" ).css("overflow" , "visible");
        $( ".l-sidebar" ).css("visibility","" );
       } );
} ) ;