var $ = window.$;

var data = require("./data.js")

$(function () {
  var Obj = {
    render: function () {
      var firstDom = '<section class = "pagefirst swiper-slide"><img draggable="false" class = "logo ani" swiper-animate-effect = "shake" swiper-animate-duration="0.2s"  src = '+data.firstSection.logo+'><img class = "bgImg" draggable="false" src = '+data.firstSection.bg+'><img draggable="false" class = "move" src="'+data.firstSection.startBtn+'"></section>',
        btnsDom = '<div class="swiper-button-prev"><img draggable="false" src="'+data.btns.left+'" ></div><div class="swiper-button-next"><img draggable="false" src="'+data.btns.right+'"></div>',
        middleDom = '',
        lastDom = '<section class = "pagelast swiper-slide"><img draggable="false" src="'+data.lastSection.bg+'"><a id = "reviews" href="'+data.lastSection.href1+'"><img draggable="false" class = "reviews ani" swiper-animate-effect = "bounceInLeft" swiper-animate-duration="1s" swiper-animate-delay=".5s" src="'+data.lastSection.reviews+'"></a><a id = "share" href="javascript:void(0)"><img draggable="false" class = "share ani" swiper-animate-effect = "bounceInRight" swiper-animate-duration="1s" swiper-animate-delay=".5s" src="'+data.lastSection.share+'"></a><img draggable="false" class = "code2v" src="'+data.lastSection.erweima+'"><div class="adBox"><a href="'+data.lastSection.adHref+'"><p class="adText">'+data.lastSection.adText+'</p><img draggable="false" class = "adImg" src="'+data.lastSection.adImg+'"></a></div><img draggable="false" id = "mark" src="'+data.lastSection.mark+'"></section>';

      for (var i = 0,len = data.middleSections.length; i <len; i++) {
        middleDom += '<section class = "pages swiper-slide"><h2 class = "tit">'+data.middleSections[i].tit+'</h2><div class="text_cover"><img class="img1" draggable="false" src="'+data.middleSections[i].img1+'"><div class="cover-1 scale">'+data.middleSections[i].text1+'</div></div><div id="point"></div></section>' 
      };

      var wrapper = $(".swiper-wrapper"),
          container = $(".swiper-container");

      wrapper.append(firstDom);
      wrapper.append(middleDom);
      wrapper.append(lastDom);

      container.append(btnsDom);
    },

    swipers: function () {
      var mySwiper = new Swiper(".swiper-container",{
        direction:"horizontal",
        mousewheelControl:true,
        prevButton:".swiper-button-prev",
        nextButton:".swiper-button-next",
        onInit:function (swiper) {

          var pre = $(".swiper-button-prev"),
              next = $(".swiper-button-next");

          swiperAnimateCache(swiper);
          swiperAnimate(swiper);
          pre.hide();
          next.css("top","80.5%");
        },
        onSlideChangeStart:function (swiper) {
          var sections = $("section"),
            pre = $(".swiper-button-prev"),
            next = $(".swiper-button-next"),
              len = sections.length;
          
          if(mySwiper.activeIndex == 0) {
            pre.hide();
            next.css("top","80.5%");
          }else if(mySwiper.activeIndex == len-1) {
            next.hide();
          }else {
            pre.show();
            next.show();
            next.css("top","90%");
          }
        },
        onSlideChangeEnd:function (swiper) {
          swiperAnimate(swiper);
        }
      })
    },

    init: function () {
      var sizeRatio = $(window).width() / 640;
      var size = sizeRatio > 1 ? 1 : sizeRatio;
      $("body").css("font-size",size * 6.25 + "%");

      var share = $("#share"),
        pre = $(".swiper-button-prev"),
        mark = $("#mark");
      share.click(function () {
        mark.show();
        pre.hide();
      });
      mark.click(function () {
        $(this).hide();
        pre.show();
      })
    },


    music:function () {
      if (data.musicUrls) {
        (function(onSrc, offSrc, musicScr) {
          var str = '<audio src="' + musicScr + '" loop="loop" id="autoplay" autoplay="autoplay"></audio><div class="musicBtn">' + '<img draggable="false" src="' + onSrc + '" class="onImg">' + '<img draggable="false" src="' + offSrc + '" class="offImg">' + '</div>';
          $('body').append(str);
          var audio = document.getElementById('autoplay');
          $('.musicBtn').on('click', function() {
            if (audio.paused) {
              audio.play();
              $('.musicBtn').removeClass('musicOff');
            } else {
              audio.pause();
              $('.musicBtn').addClass('musicOff');
            }
          });
        })(data.musicUrls.onSrc, data.musicUrls.offSrc, data.musicUrls.musicSrc);
      }
    },

    loads: function () {
      var that = this;
      function initView() {
        $(".loading").hide();

        that.render();
        that.init();
        that.swipers();
        that.music();
      }

      var loader = new resLoader( {
        resources:data.allImages,
        onStart:function (total) {}, 
        onProgress:function (current, total) {
          var percent = parseInt(current / total * 100) + "%";
          $(".pace-progress").text(percent);
        },
        onComplete: function (total) {
          initView();
        }
      })
      loader.start();
    }
  }
  Obj.loads();

  // Obj.render();
  // Obj.swiper();
  // Obj.init();
  
})