$("#roomS").change(function(){        
    var roomS = $("#roomS option:selected").val();
  
    if(web == 'Audi A3'){
      $(".boxmodel").show();
      $(".boxmode2").hide();
    }else{
      $(".boxmodel").hide();
      $(".boxmode2").show();
    }
  })