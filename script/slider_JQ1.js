// $(document).ready(function() {
//                     $(".slider--testimonials").each(function () { // обрабатываем каждый слайдер
//                      var obj = $(this);
//                      $(obj).append("<div class='nav--testimonials'></div>");
//                      $(obj).find(".testimonials__review").each(function () {
//                       $(obj).find(".nav--testimonials").append("<span class='span--testimonials' rel='"+$(this).index()+"'></span>"); // добавляем блок навигации
//                       $(this).addClass("slider--testimonials"+$(this).index());
//                      });
//                      $(obj).find(".span--testimonials").first().addClass("on--testimonials"); // делаем активным первый элемент меню
//                     });
//                    });
//                    function sliderJS (obj, sl) { // slider function
//                     var ul = $(sl).find(".testimonials__items"); // находим блок
//                     var bl = $(sl).find(".testimonials__review"+obj); // находим любой из элементов блока
//                     var step = $(bl).width()+30; // ширина объекта
//                     $(ul).animate({marginLeft: "-"+step*obj}, 500); // 500 это скорость перемотки
//                    }
//                    $(document).on("click", ".span--testimonials", function() { // slider click navigate
//                     var sl = $(this).closest(".slider--testimonials"); // находим, в каком блоке был клик
//                     $(sl).find(".span--testimonials").removeClass("on--testimonials"); // убираем активный элемент
//                     $(this).addClass("on--testimonials"); // делаем активным текущий
//                     var obj = $(this).attr("rel"); // узнаем его номер
//                     sliderJS(obj, sl); // слайдим
//                     return false;
//                    });


//                    // slider--testimonials



    $(document).ready(function() {
    $(".slider--testimonials").each(function () { // обрабатываем каждый слайдер
        var obj = $(this);
        $(obj).append("<div class='nav--testimonials'></div>");
        $(obj).find(".testimonials__review").each(function () {
        $(obj).find(".nav--testimonials").append("<span class='span--testimonials' rel='"+$(this).index()+"'></span>"); // добавляем блок навигации
        $(this).addClass("slider--testimonials"+$(this).index());
        });
        $(obj).find(".span--testimonials").first().addClass("on--testimonials"); // делаем активным первый элемент меню
    });
    });



    function sliderJS (obj, sl) { // slider function
        var ul = $(sl).find("ul.testimonials__items"); // находим блок
        var bl = $(sl).find("li.slider--testimonials"+obj); // находим любой из элементов блока
        var step = $(bl).width(); // ширина объекта 
        $(bl).animate({opacity: "1"});
        $(bl).animate({opacity: "0.2"}, 500); // 500 это скорость перемотки
       }


       $(document).on("click", ".span--testimonials", function() { // slider click navigate
        var sl = $(this).closest(".slider--testimonials"); // находим, в каком блоке был клик
        $(sl).find("span--testimonials").removeClass("on"); // убираем активный элемент
        $(this).addClass("on"); // делаем активным текущий
        var obj = $(this).attr("rel"); // узнаем его номер
        sliderJS(obj, sl); // слайдим
        return false;
       });
   
                   