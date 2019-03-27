$(function(){
  //console.log('hello');
  var $width=$('#width'),
      $height=$('#height'),
      $btnCal=$('#btn'),
      $perimeter=$('#perimeter'),
      $widthValidation=$('#width-validation'),
      $heightValidation=$('height-validation'),
      $area=$('#area');
  
  //校验
  $height.focusout(function(){
    var h=$height.val();
    if(h===''){
      $heightValidation.html('高度不能为空!');
      $height.select();
    }
  });

  $width.focusout(function(){
    var w=$width.val();
    if(w===''){
      $widthValidation.html('宽度不能为空！');
      $width.select();
    }
  })
  $btnCal.click(function(){
    var w=Number($width.val()),
        h=Number($height.val());

    var r=new Rectangle(w,h);
    
    $perimeter.val(r.perimeter());
    $area.val(r.area());
  });
});
