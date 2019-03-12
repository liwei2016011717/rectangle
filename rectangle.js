$(function(){
  //console.log('hello');
  var $width=$('#width'),
      $height=$('#height'),
      $btnCal=$('#btn'),
      $perimeter=$('#perimeter'),
      $area=$('#area');
  $btnCal.click(function(){
    var w=Number($width.val()),
        h=Number($height.val());

    var r=new Rectangle(w,h);
    
    $perimeter.val(r.perimeter());
    $area.val(r.area());
  });
})
