const backToTop = document.getElementById('backtotop');

function checkScroll() {
    /*웹페이지가 얼마나 스크롤 되어있는지 확인하는 값(픽셀단위로 반환)
    */
   let pageYOffset = window.pageYOffset;
   if (pageYOffset !=0) {
       backToTop.classList.add('show');
   } else {
       backToTop.classList.remove('show');
   }
}

function moveBackToTop() {
    if(window.pageYOffset) {
        window.scrollTo({top: 0, behavior: "smooth"})
    }
}

window.addEventListener('scroll', checkScroll); //스크롤할때마다 함수호출
backToTop.addEventListener('click',moveBackToTop);

/*-------------------------------------------------------------*/
let curPos = 0; //현재 보고있는 li의 인덱스 번호
let position = 0; //현재 ul의 위치값
const IMAGE_WIDTH = 1000;
const ulTag = document.querySelector(".project-list");
const prevBtn = document.querySelector(".slide-prev");
const nextBtn = document.querySelector(".slide-next");

function init() {
    prevBtn.addEventListener('click',prev);
    nextBtn.addEventListener('click',next);
}
function prev() {
    if(curPos > 0) { //인덱스 값이 0보다 커야실행
    position += IMAGE_WIDTH;
    console.log(position);
    ulTag.style.transform = `translateX(${position}px)`;
    curPos-=1;
    } 
}

function next() {
    if(curPos < 1){
    position -= IMAGE_WIDTH;
    console.log(position);
    ulTag.style.transform = `translateX(${position}px)`;
    curPos+=1;
    } 
}

init();
