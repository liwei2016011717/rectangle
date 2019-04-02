$(function(){
  //console.log('hello');
  var $width=$('#width'),
      $height=$('#height'),
      $btnCal=$('#btn'),
      $perimeter=$('#perimeter'),
      $widthValidation=$('#width-validation'),
      $heightValidation=$('#height-validation'),
      $area=$('#area');
  
  
  $btnCal.click(function(){
    var w=Number($width.val()),
        h=Number($height.val());

    var r=new Rectangle(w,h);
    
    if(h===''){
      $heightValidation.html('高度不能为空');
      $height.select();
    }

    if(w===''){
      $widthValidation.html('宽度不能为空');
    }
    $perimeter.val(r.perimeter());
    $area.val(r.area());
  });
});
