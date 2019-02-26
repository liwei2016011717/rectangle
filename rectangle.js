$(function(){
  //console.log('hello');
  var $width=$('#width'),
      $length=$('#length'),
      $btnCal=$('#btn'),
      $perimeter=$('#perimeter'),
      $area=$('#area');
  $btnCal.click(function(){
    var w=Number($width.val()),
        l=Number($length.val());

    var p=2*(w+l),
        a=w*l;
    
    $perimeter.val(p);
    $area.val(a);
  })
})
