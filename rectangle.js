$(function(){
  //console.log('hello');
  var $width=$('#width'),
      $height=$('#height'),
      $btnCal=$('#btn'),
      $perimeter=$('#perimeter'),
      $widthValidation=$('#width-validation'),
      $heightValidation=$('#height-validation'),
      $area=$('#area');
  
  //字符校验
  $height.keypress(function(e){
    if(/[abcdf-zABCDF-Z`~!@#$%^&*()=_+[\]{}|;:'",<>/?\\]/.test(e.key)){
      e.preventDefault();
    }
    if(e.key==='.'){
      if(e.target.value==='') e.preventDefault();

      if(e.target.value.indexOf('.')!==-1){
        e.preventDefault();
      }else{
        if(e.target.selectionStart===0) e.preventDefault();
      }
    }
  });

  //字段
  $height.focusout(function(){
    var h=$height.val();
    if(h===''){
      $heightValidation.html('高度不能为空!');
      $height.select();
    }else{

      if(Number(h)<0){
        $heightValidation.html('高度不能为负');
        $height.select();
        return;
      }else{
        $heightValidation.html('');
      }
      if(!/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test(h)){
        $heightValidation.html('必须为合法数字');
        $height.select();
        return;
      }else{
        $heightValidation.html('');
      }
    }
  });

  $width.focusout(function(){
    var w=$width.val();
    if(w===''){
      $widthValidation.html('宽度不能为空！');
      $width.select();
    }else{

      if(Number(w)<0){
        $widthValidation.html('宽度不能为负');
        $width.select();
        return;
      }else{
        $widthValidation.html('');
      }

      if(!/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test(w)){
        $widthValidation.html('必须为合法数字');
        $width.select();
        return;
      }else{
        $widthValidation.html('');
      }
    }
  });
  $btnCal.click(function(){
    var w=Number($width.val()),
        h=Number($height.val());

    var r=new Rectangle(w,h);
    
    $perimeter.val(r.perimeter());
    $area.val(r.area());
  });
});
