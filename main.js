var startoutput = 0
var log =""
var variable = { numbers: {add:"+",subtract:"-",multiply:"*"} }
$('.one').on('click',function(){
  $('textarea').val(log = log + "1");
})
$('.two').on('click',function(){
  $('textarea').val(log =log + "2")
})
$('.three').on('click',function(){
  $('textarea').val(log =log+"3")
})
$('.four').on('click',function(){
$('textarea').val(log =log+ "4")
})
$('.five').on('click',function(){
$('textarea').val(log =log+"5")
})
$('.six').on('click',function(){
$('textarea').val(log = log+"6")
})
$('.seven').on('click',function(){
$('textarea').val(log =log+"7")
})
$('.eight').on('click',function(){
$('textarea').val(log =log+"8")
})
$('.nine').on('click',function(){
$('textarea').val(log=log+"9")
})
$('.zero').on('click',function(){
$('textarea').val(log=log+"0")
})
$('div.plus').on('click',function(){
  $('textarea').val(log=log +"+");
  $(startoutput="+");
})
$('div.minus').on('click',function(){
  $('textarea').val(log=log +"-");
  $(startoutput="minus");
})
$('div.multiply').on('click',function(){
  $('textarea').val(log=log +"*");
  $(startoutput=variable.add);
})
$('div.clear').on('click',function(){
  $('textarea').val(log= 0)
})
$('div.equals').on('click',function(){
  $('textarea').val(log = log.split(variable));
  if (startoutput=variable.add){ $('textarea').val(log = parseInt(log[0]) + parseInt(log[1])) }
 //else if (startoutput){ $('textarea').val(log = parseInt(log[0]) - parseInt(log[1]))}
})
// Tried really hard to do this without copy and pasting code from the internet. I was able to get the calculator to add but for some
//reason I couldnt get the equal button to subtract or multiply.
