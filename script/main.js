// 첫 단계 : 변수 할당하기, 동작을 적용할 요소를 담기
const articles = document.querySelectorAll("article");
const aside = document.querySelector("aside");
const close = aside.querySelector("span");

for (const el of articles) {

    el.addEventListener("mouseenter",(e)=>{
        e.currentTarget.querySelector("video").play();
        // ↑ add이벤트가 붙어있는 대상을 지칭
        // e.currentTarget 은 이벤트 리스너가 붙은 대상을 의미함
        // 여기서는 마우스를 올린 article이 됩니다
        // 해당 article 에서 video 태그를 querySelector로 찾아서 그 비디오를 play() 합니다
    })
    el.addEventListener("mouseleave",(e)=>{
        e.currentTarget.querySelector("video").pause();
    })

    el.addEventListener("click",(e)=>{

        // 클릭한 article(=== e.currentTarget)의 내용(h2, p, video주소)을 변수에 담기
        let tit = e.currentTarget.querySelector("h2").innerText;
        let txt = e.currentTarget.querySelector("p").innerText;
        let vid = e.currentTarget.querySelector("video").getAttribute("src");

        aside.querySelector("h1").innerText = tit;
        aside.querySelector("p").innerText = txt;
        aside.querySelector("video").setAttribute("src",vid);
        // setAttribute(얘를, 이것으로) 속성 값을 교체하는 메소드
        

        aside.classList.add("on");
        // aside에다가 on붙이기
        // classList - 클래스를 핸들링 할 수 있는 목록을 담아놓은 객체 
        // (클래스에 손댈 거 있으면 일단 클래스리스트를 쓰면 됨,,, 도라에몽 주머니 느낌)
        // -classList 라는 객체는 class에 관련된 모든 메소드들이 담긴 객체 임
        aside.querySelector("video").play();
    })
    
}
close.addEventListener("click",()=>{
    aside.classList.remove("on");
    aside.querySelector("video").pause();
    // 옆으로 사라진 상태에서도 재생되는 걸 해결하기 위한 코드
})