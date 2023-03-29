
// $(function() {p
  // $(window).resize(function() {
    var num, valPlus, valPlus1, valPlus2, set, set1, set2;
    $('#fullpage').fullpage({
      //options here
      autoScrolling: true,//  automatic 스크롤을 쓸지 , normal스크롤을 쓸지 정의함
      scrollHorizontally: true,//슬라이더 안에서 마우스 휠 또는 트랙패드를 써서 수평으로 미끄러지듯 움직일지를 정의합니다.
      navigation: true, // true로 설정하면 작은 원으로 이루어진 이동 막대기가 나타납니다.
      navigationTooltips:['Top', 'Game', 'Character', 'Roadmap', 'Partners', 'Members'],
      showActiveTooltip : false,
      anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'lastPage'],
      menu: '#myMenu',
      responsiveWidth: 1023,//픽셀아래로 부터 fullpage 가깨짐 즉 
      scrollHorizontally :false,
      
      afterLoad: function() {
        var activeSection = $('.fullpage-wrapper .active');
        if (activeSection.hasClass('section1')) {
          if (window.innerWidth < 769) {
            $(".m_menu01").addClass("line")
            $(".m_menu02").removeClass("line")
            $(".m_menu03").removeClass("line")
            $(".m_menu04").removeClass("line")
            $(".m_menu05").removeClass("line")
            $(".m_menu06").removeClass("line")

            $(".pre-registraion_box").children('a').attr('href', 'https://bsc-marketplace.stellafantasy.io/m/signup');
          }
          $("header").css({"background" : "transparent"})
          // $(".section1").addClass("on");
          $(".pc_menu li")[0].className = "pc_menu_01 line";
          $(".pc_menu li")[1].className = "pc_menu_02";
          $(".pc_menu li")[2].className = "pc_menu_03";
          $(".pc_menu li")[3].className = "pc_menu_04";
          $(".pc_menu li")[4].className = "pc_menu_05";
          $(".pc_menu li")[5].className = "pc_menu_06";
          $(".pc_menu li")[6].className = "pc_menu_07";

        } else if (activeSection.hasClass('section2')) {
          
          if (window.innerWidth < 769) {
            $(".m_menu01").removeClass("line")
            $(".m_menu02").addClass("line")
            $(".m_menu03").removeClass("line")
            $(".m_menu04").removeClass("line")
            $(".m_menu05").removeClass("line")
            $(".m_menu06").removeClass("line")
          }
          
          $("header").css({"background" : "rgba(0, 0, 0, 0.5)"})
          // $(".section2").addClass("on");

          fadeIn()

          $(".pc_menu li")[0].className = "pc_menu_01";
          $(".pc_menu li")[1].className = "pc_menu_02 line";
          $(".pc_menu li")[2].className = "pc_menu_03";
          $(".pc_menu li")[3].className = "pc_menu_04";
          $(".pc_menu li")[4].className = "pc_menu_05";
          $(".pc_menu li")[5].className = "pc_menu_06";
          $(".pc_menu li")[6].className = "pc_menu_07";


        } else if (activeSection.hasClass('section3')) {
          
          if (window.innerWidth < 769) {
            $(".m_menu01").removeClass("line")
            $(".m_menu02").removeClass("line")
            $(".m_menu03").addClass("line")
            $(".m_menu04").removeClass("line")
            $(".m_menu05").removeClass("line")
            $(".m_menu06").removeClass("line")
          }
          
          $("header").css({"background" : "rgba(0, 0, 0, 0.5)"})

          $(".pc_menu li")[0].className = "pc_menu_01";
          $(".pc_menu li")[1].className = "pc_menu_02";
          $(".pc_menu li")[2].className = "pc_menu_03 line";
          $(".pc_menu li")[3].className = "pc_menu_04";
          $(".pc_menu li")[4].className = "pc_menu_05";
          $(".pc_menu li")[5].className = "pc_menu_06";
          $(".pc_menu li")[6].className = "pc_menu_07";

        } else if (activeSection.hasClass('section4')) {

          if (window.innerWidth < 769) {
            $(".m_menu01").removeClass("line")
            $(".m_menu02").removeClass("line")
            $(".m_menu03").removeClass("line")
            $(".m_menu04").addClass("line")
            $(".m_menu05").removeClass("line")
            $(".m_menu06").removeClass("line")
          }

          $("header").css({"background" : "rgba(0, 0, 0, 0.5)"})

          $(".pc_menu li")[0].className = "pc_menu_01";
          $(".pc_menu li")[1].className = "pc_menu_02";
          $(".pc_menu li")[2].className = "pc_menu_03";
          $(".pc_menu li")[3].className = "pc_menu_04 line";
          $(".pc_menu li")[4].className = "pc_menu_05";
          $(".pc_menu li")[5].className = "pc_menu_06";
          $(".pc_menu li")[6].className = "pc_menu_07";

        } else if (activeSection.hasClass('section6')) {
          
          if (window.innerWidth < 769) {
            $(".m_menu01").removeClass("line")
            $(".m_menu02").removeClass("line")
            $(".m_menu03").removeClass("line")
            $(".m_menu04").removeClass("line")
            $(".m_menu05").addClass("line")
            $(".m_menu06").removeClass("line")
          }
          
          $("header").css({"background" : "rgba(0, 0, 0, 0.5)"})

          $(".pc_menu li")[0].className = "pc_menu_01";
          $(".pc_menu li")[1].className = "pc_menu_02";
          $(".pc_menu li")[2].className = "pc_menu_03";
          $(".pc_menu li")[3].className = "pc_menu_04";
          $(".pc_menu li")[4].className = "pc_menu_05 line";
          $(".pc_menu li")[5].className = "pc_menu_06";
          $(".pc_menu li")[6].className = "pc_menu_07";

        } else if (activeSection.hasClass('section5')) {
          if (window.innerWidth < 769) {
            $(".m_menu01").removeClass("line")
            $(".m_menu02").removeClass("line")
            $(".m_menu03").removeClass("line")
            $(".m_menu04").removeClass("line")
            $(".m_menu05").removeClass("line")
            $(".m_menu06").addClass("line")
          }
          $("header").css({"background" : "rgba(0, 0, 0, 0.5)"})

          $(".pc_menu li")[0].className = "pc_menu_01";
          $(".pc_menu li")[1].className = "pc_menu_02";
          $(".pc_menu li")[2].className = "pc_menu_03";
          $(".pc_menu li")[3].className = "pc_menu_04";
          $(".pc_menu li")[4].className = "pc_menu_05";
          $(".pc_menu li")[5].className = "pc_menu_06 line";
          $(".pc_menu li")[6].className = "pc_menu_07";

        } else if (activeSection.hasClass('section7')) {

            if (window.innerWidth < 769) {
              $(".m_menu01").removeClass("line")
              $(".m_menu02").removeClass("line")
              $(".m_menu03").removeClass("line")
              $(".m_menu04").removeClass("line")
              $(".m_menu05").removeClass("line")
              $(".m_menu06").removeClass("line")
              $(".m_menu07").removeClass("line")
              
            }
            $("header").css({"background" : "rgba(0, 0, 0, 0.5)"})
            // $(".section7").addClass("on");

            $(".pc_menu li")[0].className = "pc_menu_01";
            $(".pc_menu li")[1].className = "pc_menu_02";
            $(".pc_menu li")[2].className = "pc_menu_03";
            $(".pc_menu li")[3].className = "pc_menu_04";
            $(".pc_menu li")[4].className = "pc_menu_05";
            $(".pc_menu li")[5].className = "pc_menu_06";
            $(".pc_menu li")[6].className = "pc_menu_07";
        } else if (activeSection.hasClass('section8')) {
          if (window.innerWidth < 769) {
            $(".m_menu01").removeClass("line")
            $(".m_menu02").removeClass("line")
            $(".m_menu03").removeClass("line")
            $(".m_menu04").removeClass("line")
            $(".m_menu05").removeClass("line")
            $(".m_menu06").removeClass("line")
            $(".m_menu07").removeClass("line")
            $(".m_menu08").removeClass("line")
          }
          $("header").css({"background" : "rgba(0, 0, 0, 0.5)"})

          $(".pc_menu li")[0].className = "pc_menu_01";
          $(".pc_menu li")[1].className = "pc_menu_02";
          $(".pc_menu li")[2].className = "pc_menu_03";
          $(".pc_menu li")[3].className = "pc_menu_04";
          $(".pc_menu li")[4].className = "pc_menu_05";
          $(".pc_menu li")[5].className = "pc_menu_06 ";
          $(".pc_menu li")[6].className = "pc_menu_07";
          $(".pc_menu li")[7].className = "pc_menu_08";

        }
        

      }
    });

  // }).trigger("resize");
    
  function fadeIn() {
    
    $(".fadeIn01").attr('id', '');
    // setTimeout -> 비동기 함수
    setTimeout(() => {
      $(".fadeIn02").attr('id', '');
    }, 250)

    setTimeout(() => {
      $(".fadeIn03").attr('id', '');
    }, 500)

    setTimeout(() => {
      $(".fadeIn04").attr('id', '');
    }, 750)

  }
  
