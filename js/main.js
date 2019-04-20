console.log('JS works good')
console.log('gulpfile works')
$(document).ready(function ($) {
  // home part
  $('#homeSec').load('home.html')
  // service part
  $('#serviceHtml').load('service.html')
  // product part
  $('#productHtml').load('products.html')
  // contact part
  $('#conCont').load('contact/info.html')
  $('#bgpic').addClass('infoIMG')
  // eventlistener
  $('#conForm').on('click', function () {
    console.log('clicked form btn')
    $('#conCont')
      .load('contact/form.html')
      .fadeIn('slow')
    $('#bgpic')
      .removeClass('infoIMG mapIMG')
      .addClass('formIMG')
  })
  $('#conMap').on('click', function () {
    console.log('clicked map btn')
    $('#conCont').load('contact/map.html')
    $('#bgpic')
      .removeClass('infoIMG formIMG')
      .addClass('mapIMG')
  })
  $('#conMesg').on('click', function () {
    console.log('clicked info btn')
    $('#conCont').load('contact/info.html')
    $('#bgpic')
      .removeClass('mapIMG formIMG')
      .addClass('infoIMG')
  })
})
