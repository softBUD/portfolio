(()=>{
        let yOffset = 0; //pageYOffset 대신에 쓸 변수
        let prevScrollHeight = 0; //현재 스크롤 위치보다 이전에 위치한 스크롤 섹션들의 스크롤 높이값의 합
        let currentScene = 0; //현재 활성화된(눈앞에 보고있는) 씬(scroll-section)

    const sceneInfo = [
        {   //0
            type:'normal',
            heightNum: 2,
            scrollHeight: 0,
            objs: { container: document.querySelector('#scroll-section-0')}
        },
        {   //1
            type:'normal',
            heightNum: 2, //브라우저 높이의 2배로 scrollHeight 세팅
            scrollHeight: 0, //애니메이션 구간을 설정하는 프로퍼티
            objs: {container: document.querySelector('#scroll-section-1')}
        },
        {   //2
            type:'normal',
            heightNum: 2, //브라우저 높이의 2배로 scrollHeight 세팅
            scrollHeight: 0, //애니메이션 구간을 설정하는 프로퍼티
            objs: {container: document.querySelector('#scroll-section-2')}
        },
    ];
    function setLayout() {
        //각 스크롤 섹션의 높이 세팅
        for (let i=0; i < sceneInfo.length; i++) {
            //장면객체[인덱스].스크롤길이 = 장면객체[인덱스].윈도우의 스크롤길이*2
            //객체번호마다 쿼리셀렉터로 섹션 지정

            sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight; 
            sceneInfo[i].objs.container.style.height=`${sceneInfo[i].scrollHeight}px`;
        }

    }
    //prevScroll + currentScene 값(현재 보이는 인덱스) < YOffset 값 상태가 되면
    //다음 인덱스의 애니메이션 실행
    function scrollLoop() {
        prevScrollHeight = 0;

         for (let i=0; i < currentScene; i++) {
             prevScrollHeight += sceneInfo[i].scrollHeight;
             //이전까지 스크롤한 값
         } 
         if(yOffset > prevScrollHeight + sceneInfo[currentScene].scrollHeight) {
            currentScene++;
         }
         if (yOffset < prevScrollHeight) {
             currentScene--;
         }
         console.log(currentScene);
    }

    window.addEventListener('resize',setLayout); //1.창 사이즈 변경때마다 섹션의 높이를 세팅
    window.addEventListener('scroll', () => {
        yOffset = window.pageYOffset; //2.스크롤할때마다 변수에 yOffset 저장
        scrollLoop(); //3.스크롤루프 함수 실행
    })
    setLayout();
})();