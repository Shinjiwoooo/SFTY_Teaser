
const playBtn = document.querySelector('.arrow')
const youTubePopup = document.querySelector('.youTube')
const closePopup = document.querySelector('.exit')


const linkPopup = document.querySelector('.user_acquisition')
const closePopup_2 = document.querySelector('.exit_2')


const pre_registrationPopup = document.querySelector('.pre-registration')
const closePopup_3 = document.querySelector('.exit_3')

const m_menubar = document.querySelector('.m_menubar')
const openMobileMenu = document.querySelector('.m_menu')
const mobile_content  = document.querySelector('.gnb_wrap')
const closeMobileMenu = document.querySelector('.m_close')
const m_menu_target = document.querySelectorAll('.m_content a')

// querySelectorAll 은 배열형태로 잡힌다.
const pc_menu_target = document.querySelectorAll('.pc_menu li')
let targetBody = document.querySelector('body');

/*         
        2023.02.01 ->

        # 요구사항분석

        1. 삼각형을 누르면 하위 메뉴가 서서히 나오면서 삼각형이 회전한다.
        2. 회전한 삼각형을 다시 누르면 하위 메뉴가 서서히 사라지면서 삼각형이 원래대로 돌아온다.

        3. 하위메뉴(日本語)를 클릭하면 하위 메뉴가 서서히 사라지면서 삼각형이 원래대로 돌아온다. 
        4. 하위메뉴(日本語)를 클릭하면 상위메뉴(English) 랑 타이틀과 컬러가 교체된다.

*/

// 요구사항 1번과 2번.. (오직 메뉴만 열고 닫는 기능을 만든 것..)
const menuBody = document.getElementById("Dropdown_menu");
const triangleIcon = document.querySelector(".arrow_btn");
const dropbtn = document.querySelector(".dropbtn")
dropbtn.addEventListener('click', menuFunc);

function menuFunc() {
    if (triangleIcon.style.transform == "" || triangleIcon.style.transform == "rotate(0deg)") {
        // 클릭 시.. 현재 삼각형이 회전되지 않은 상태 라면..?
        
        // 1. 하위 메뉴를 보이게 한다..
        menuBody.classList.add("show");

        // 2. 삼각형 이미지를 회전시킨다..
        triangleIcon.style.transform = "rotate(-180deg)";
        triangleIcon.style.transition = "0.5s";

    } else {
        // 클릭 시.. 현재 삼각형이 회전 된 상태 라면..?

        // 1. 하위 메뉴를 사라지게 한다..
        menuBody.classList.remove("show");

        // 2. 삼각형 이미지를 원래대로 회전시킨다..
        triangleIcon.style.transform = "rotate(0deg)";
        triangleIcon.style.transition = "0.5s";
    }
}

// 요구사항 3번과 4번..
menuBody.addEventListener('click', menuTitleChange);

function menuTitleChange(e) {

    // 1. 메인타이틀의 글씨를 미리 저장 해놓는다.
    const mainTitle = document.querySelector(".languageMainTitle");
    const saveMainTitle = document.querySelector(".languageMainTitle").innerHTML;
    const subTitle = document.querySelector(".languageSubTitle");
    const img = document.querySelector(".pre-registraion_box");    


   // 2. 메인타이틀 자리에 내가 클릭한 곳의 타이틀을 넣는다..
    mainTitle.innerHTML = e.target.innerHTML;


   // 3. 저장해놨던 메인타이틀 글씨를 서브타이틀에 넣는다..
    subTitle.innerHTML = saveMainTitle;


    // 4. 타이틀 교체가 끝난 후 .. 메인 타이틀 텍스트에 따라 이미지를 변경함..
    if (mainTitle.innerHTML == "English") {
        img.style.backgroundImage = "url('./images/pre-registration_popup/pre-registration_EN.png')";
        img.style.transition = "0.5s";
    } else if (mainTitle.innerHTML == "日本語") {
        img.style.backgroundImage = "url('./images/pre-registration_popup/pre-registration_JP.png')";
        img.style.transition = "0.5s";
    }
    // 4. 위에서 만들어놓았던 메뉴 열고 닫기 기능을 가진 함수를 실행한다.
    menuFunc();
}

// end
function show_popup(){
    youTubePopup.classList.remove("close")
}

function close_popup(){
    youTubePopup.classList.add("close")
}

function close_linkpopup(){
    linkPopup.classList.add("close")
}

function close_bannerpopup(){
    pre_registrationPopup.classList.add("close")
}

function open_menu(){
    openMobileMenu.style.display = "block"
    openMobileMenu.classList.add("right_fade_in")
    m_menubar.style.display = "none"

    if (mobile_content != undefined && mobile_content != null) {
        mobile_content.style.right = "0"
    }
    

    
    targetBody.style.overflow = 'hidden';
    targetBody.style.touchAction="none";
    
}

function scrollWall(e) {
    console.log(e)
}

function close_menu(){
    openMobileMenu.classList.remove("right_fade_in")
    m_menubar.style.display = "block";
    targetBody.style.overflow = 'visible';
    
    for(var i = 0; i < m_menu_target.length; i++){
        m_menu_target[i].classList.remove('line')
    }

}

//처음에 한마디로 박아놓고 시작한다 li로 눌렀을때도 링크가 타야힌다
function pc_menu_active() {
    let linkData;
    for (var i = 0; i < pc_menu_target.length; i++) {
        if (pc_menu_target[i] == this) {
            /*
                클릭한 메뉴가 WhitePaper 또는 Maketplace 라면 ?

                line 이라는 클래스를 넣지 않는다.
            */
            
            if (this.classList.value == 'pc_menu_07' || this.classList.value == 'pc_menu_08') {

            } else {
                this.classList.add("line");
            }
            
            linkData = this.querySelector('a').href.split("#")[1]
            // console.log(this.querySelector('a').href)
            // console.log(this.querySelector('a').href.split("#"))
             //#을 기점으로 오른쪽 왼쪽  배열로 분리 
            // console.log(linkData)
            location.href = `#${linkData}`
            //`` 백틱안에 쓰는건 전부 string string 안에 변수 추가를 할수 있는데..
            // `${변수}`=string안에 변수를 넣고 싶을때 $ 씀   #= string

        } else {

            /*
                클릭한 메뉴가 WhitePaper 또는 Maketplace 라면 ?

                선택된 메뉴들 중에서 line 이라는 클래스를 빼지 않는다.
                
                -> 이걸 넣지 않는다면 Members 에서 WhitePaper 를 들어갔다가 홈페이지로
                다시오면 파란선이 아무데도 없음.

                -> WhitePaper 혹은 Maketplace 메뉴를 들어가기 전에 내가 클릭했던
                라인은 남아있어야 하기 때문에 넣음.
            */

            if (this.classList.value == 'pc_menu_07' || this.classList.value == 'pc_menu_08') {

            } else {
                pc_menu_target[i].classList.remove("line")
            }
            
        }
    }
}

function hide_mobile_menu (){
    
    if(innerWidth > 768){
        m_menubar.style.display = "none";
   
        openMobileMenu.style.display = "none";
    }else{
        m_menubar.style.display = "block";
    }

    // if(openMobileMenu.style.display == "block") {
    //     m_menubar.style.display = "none";
    //     debugger
    // }
    

}

//예외처리

for (var i = 0; i < m_menu_target.length; i++) {
    m_menu_target[i].addEventListener('click', close_menu)
}

for (var i = 0; i < pc_menu_target.length; i++) {
    pc_menu_target[i].addEventListener('click', pc_menu_active)
}


playBtn.addEventListener("click", show_popup)
closePopup.addEventListener("click", close_popup)
closePopup_2.addEventListener("click",close_linkpopup)
closePopup_3.addEventListener("click",close_bannerpopup)
youTubePopup.addEventListener("click", close_popup)
m_menubar.addEventListener("click", open_menu)
closeMobileMenu.addEventListener("click", close_menu)
window.addEventListener('resize' , hide_mobile_menu)
