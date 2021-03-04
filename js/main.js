$(document).ready(function(){
    $('.slider').slick( {
        infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: "<img src='./media/pointer.png'>",
  prevArrow: false
    });
});
$(document).ready(function(){
    $('.slider-mobile').slick( {
        infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  nextArrow: "<img src='./media/pointer.png'>",
  prevArrow: false
    });
});
$(document).ready(function(){
    $('.slider-portrait').slick( {
        infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: "<img src='./media/pointer.png'>",
  prevArrow: false
    });
});


$(document).ready(function(){
    $('.clients-slider').slick( {
        infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  nextArrow: "<img src='./media/pointer.png'>",
  prevArrow: false
    });
});
$(document).ready(function(){
    $('.clients-slider-mobile').slick( {
        infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: "<img src='./media/pointer.png'>",
  prevArrow: false
    });
});

// /* Индекс слайда по умолчанию */
// var slideIndex = 1;
// showSlides(slideIndex);

// /* Функция увеличивает индекс на 1, показывает следующй слайд*/
// function plusSlide() {
//     showSlides(slideIndex += 1);
// }
// function showSlides(n) {
//     var i;
//     var slides = document.getElementsByClassName("item");
//     var dots = document.getElementsByClassName("slider-dots_item");
//     if (n > slides.length) {
//       slideIndex = 1
//     }
//     if (n < 1) {
//         slideIndex = slides.length
//     }
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     slides[slideIndex - 1].style.display = "block";
//     dots[slideIndex - 1]+= " active";
// }
function openbox(id){
    var el = document.getElementById('item'+id);

    if(!el.hidden){
      document.querySelectorAll('.item').forEach(item => item.hidden = true);
      el.hidden = false;
    }else{
      el.hidden = true;
    }
    if(el.hidden){
      document.querySelectorAll('.item').forEach(item => item.hidden = true);
      el.hidden = false;
    }else{
      el.hidden = true;
    }
}