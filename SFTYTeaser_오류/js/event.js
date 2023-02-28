
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

const pc_menu_target = document.querySelectorAll('.pc_menu li')
let targetBody = document.querySelector('body');


// 틱톡
const content_box = document.querySelector(".pre-registration .pre-registraion_box .content_box")
const content_box_m = document.querySelector(".pre-registration .pre-registraion_box_m .content_box")

function click_banner(){ ttq.track('클릭버튼');
}
function click_banner_m(){ ttq.track('클릭버튼');
}


const menuBody = document.getElementById("Dropdown_menu");
const triangleIcon = document.querySelector(".arrow_btn");
const dropbtn = document.querySelector(".dropbtn")
dropbtn.addEventListener('click', menuFunc);




function menuFunc() {
    if (triangleIcon.style.transform == "" || triangleIcon.style.transform == "rotate(0deg)") {
        
        menuBody.classList.add("show");
        triangleIcon.style.transform = "rotate(-180deg)";
        triangleIcon.style.transition = "0.5s";

    } else {
        menuBody.classList.remove("show");
        triangleIcon.style.transform = "rotate(0deg)";
        triangleIcon.style.transition = "0.5s";
    }
}

menuBody.addEventListener('click', menuTitleChange);

function menuTitleChange(e) {

    const mainTitle = document.querySelector(".languageMainTitle");
    const saveMainTitle = document.querySelector(".languageMainTitle").innerHTML;
    const subTitle = document.querySelector(".languageSubTitle");
    const img = document.querySelector(".pre-registraion_box");    


    mainTitle.innerHTML = e.target.innerHTML;

    subTitle.innerHTML = saveMainTitle;

    if (mainTitle.innerHTML == "English") {
        img.style.backgroundImage = "url('./images/pre-registration_popup/pre-registration_EN.png')";
        img.style.transition = "0.5s";
    } else if (mainTitle.innerHTML == "日本語") {
        img.style.backgroundImage = "url('./images/pre-registration_popup/pre-registration_JP.png')";
        img.style.transition = "0.5s";
    }
    menuFunc();
}

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

function pc_menu_active() {
    let linkData;
    for (var i = 0; i < pc_menu_target.length; i++) {
        if (pc_menu_target[i] == this) {

            if (this.classList.value == 'pc_menu_07' || this.classList.value == 'pc_menu_08') {

            } else {
                this.classList.add("line");
            }
            
            linkData = this.querySelector('a').href.split("#")[1]

            location.href = `#${linkData}`

        } else {



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
content_box.addEventListener('click', click_banner)
content_box_m.addEventListener('click', click_banner_m)

