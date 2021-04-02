
$(document).ready(function () {

let blockquoteList = [
   {
     text : "For 50 years, WWF has been protecting the future of nature. The world's leading conservation organization, WWF works in 100 countries and is supported by 1.2 million members in the United States and close to 5 million globally.",
     autor : "Hilal Hilalli"
   },
   {
     text : "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
     autor : "Eli Ehmed"
   },
   {
     text : "Pictures, abstract symbols, materials, and colors are among the ingredients with which a designer or engineer works. To design is to discover relationships and to make arrangements and rearrangements among these ingredients.",
     autor : "Veli Hesenli"
   },
   {
     text : "Not sure what you're going to do with love this icon now you've found it? Check out our guide on getting started. Or deep dive into how to use a specific styling trick or method in our docs.",
     autor : "Elgun Resulov"
   },

   {
     text : "This icon not look right or giving you trouble on your site or project? Let us know by filing a new issue. We'll get it right as rain for you and everyone else.",
     autor : "Vuqar Eminli"
   }
]

$('.text_container').text(blockquoteList[0].text);
$('.autor h3').text(blockquoteList[0].autor);


scrollspy();
accor();
preEvA();
showMobileNaw();
onClickLinks();
// slider trigger
    $('.autoplay').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
 arrows:false,

    });

    // slider
     $('.slda').click(function(e){

      switch ($(e.target).attr('src')) {

        case 'img/slider_images/1.jpg' :
        $('.text_container').text(blockquoteList[0].text);

        $('.autor h3').text(blockquoteList[0].autor);
        break;

        case 'img/slider_images/2.jpg' :
        $('.text_container').text(blockquoteList[1].text);
        $('.autor h3').text(blockquoteList[1].autor);
        break;

        case 'img/slider_images/3.jpg' :
        $('.text_container').text(blockquoteList[2].text);
        $('.autor h3').text(blockquoteList[2].autor);
        break;

        case 'img/slider_images/4.jpg' :
        $('.text_container').text(blockquoteList[3].text);
        $('.autor h3').text(blockquoteList[3].autor);
        break;

  }

  });

    $('li a').click(function(e){

    });

    $(window).scroll(function(e){

    if ($(window).scrollTop()>0) {

        $('nav').addClass('changeNav');
        $('.fa-grip-lines').addClass('active_hamburger');
        $('#logo a').css('color','#519FFF');
        $('nav ul li:last a').addClass('btnGet');

    }
    else
    {
        $('nav').removeClass('changeNav');
        $('.fa-grip-lines').removeClass('active_hamburger');
        $('#logo a').removeAttr('style');
        $('nav ul li:last a').removeClass('btnGet');
    }

    });

    function scrollspy(){

        $(window).scroll(function(e){

            
              
              // scrollspy
              let arr = ['home','sec1','sec2','sec3','sec4'];
              var current;

              let height_Nav = $(".changeNav").innerHeight();
     
              for (var i = 0; i < arr.length; i++)
              {
                  if ( ($('#'+arr[i]).offset().top-height_Nav)<= $(window).scrollTop() )
                  {
                    current = arr[i];
                  }
              }

              $("nav a[href='#"+current+"']").addClass('active');
              $('#nav li a').not("a[href='#"+current+"']").removeClass('active');

        });

      }


    function accor(){
      $('.accordion-list > li > .answer').hide();

      $('.accordion-list > li').click(function() {

         let arr =$('.accordion-list>li>h3');

         Array.from(arr).forEach((el)=>{
            if($(el).find('active-line')){
              $(el).removeClass('active-line');
            }
         })
         

        if ($(this).hasClass("active"))
        {
           $(this).find('h3').removeClass('active-line');
           $(this).removeClass("active").find(".answer").slideUp(600);
        }
        else
        {
          $(this).find('h3').addClass('active-line');
          $(".accordion-list > li.active .answer").slideUp();
          $(".accordion-list > li.active").removeClass("active");
          $(this).addClass("active").find(".answer").slideDown();
         }
        return false;
      });

    }


    function preEvA(){

      $('.non-working').click(function(e){
        e.preventDefault();
      })

    }

    function showMobileNaw(){

        $('.fa-grip-lines').click(function(e)
        {
           $('.mobileNav').show(1000);
        });

        $('.fa-times').click(function(e)
        {
            $('.mobileNav').hide(1000);
        });

        $('.mobileNav ul li a').click(function(e)
        {
           $('.mobileNav').hide(500);
        });

    }


    function onClickLinks(){
      $('.lnks>li>a').on('click',(e)=>{
          e.preventDefault();


          let link = $(e.target).attr('data-link');

          let nav = $(".changeNav").outerHeight() || 110;
        
          let top_height_link=$(link).position().top-nav;

          $(document).scrollTop(top_height_link);


      })
    }

});
