$(function(){
  //console.log('hello');
  var $width=$('#width'),
      $height=$('#height'),
      $form=$('form'),
      $perimeter=$('#perimeter'),
      $area=$('#area');
      
  $form.submit(function(e){
    e.preventDefault();//阻止submit后页面刷新
    var w=Number($width.val()),
        h=Number($height.val());

    var r=new Rectangle(w,h);
    
    $perimeter.val(r.perimeter());
    $area.val(r.area());
  });
});
