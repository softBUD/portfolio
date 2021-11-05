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
