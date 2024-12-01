// 배경에 사용할 이미지 파일 목록 (배경 이미지 파일명)
const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];

// 현재 표시되고 있는 이미지의 인덱스를 추적하는 변수 (처음엔 0번째 이미지)
let currentIndex = 0;

// 배경 요소 중 어느 요소가 활성화되었는지 추적하는 변수 (bg1이 처음 활성화됨)
let isBg1Active = true;

// 배경 요소 bg1과 bg2를 선택하여 변수에 저장 (HTML에서 이 클래스들을 갖는 요소를 선택)
const bg1 = document.querySelector(".bg1");
const bg2 = document.querySelector(".bg2");

// 배경을 변경하는 함수
function changeBackground() {
    // 다음 이미지를 선택
    // 현재 이미지 인덱스를 +1 하여 다음 이미지로 이동하고, images.length를 이용해 순환하도록 처리
    currentIndex = (currentIndex + 1) % images.length;

    // 선택한 이미지 파일 경로를 만들어 background-image에 사용할 값으로 설정
    const newImage = `url(./images/main/${images[currentIndex]})`;

    // 현재 활성화된 배경 요소에 따라 배경을 바꾸기
    if (isBg1Active) {
        // bg1이 활성화된 상태라면, bg2를 새 이미지로 설정
        bg2.style.backgroundImage = newImage;
        bg2.style.opacity = "1"; // bg2의 불투명도를 1로 설정하여 보이게 만듦
        bg1.style.opacity = "0"; // bg1의 불투명도를 0으로 설정하여 숨김
    } else {
        // bg2가 활성화된 상태라면, bg1을 새 이미지로 설정
        bg1.style.backgroundImage = newImage;
        bg1.style.opacity = "1"; // bg1의 불투명도를 1로 설정하여 보이게 만듦
        bg2.style.opacity = "0"; // bg2의 불투명도를 0으로 설정하여 숨김
    }

    // 활성 상태 반전
    // bg1과 bg2의 활성 상태를 번갈아 가며 변경하기 위해 true/false를 반전시킴
    isBg1Active = !isBg1Active;
}

// 최초 배경을 한 번 변경하여 시작
changeBackground();

// 5초마다 changeBackground 함수를 호출하여 배경을 자동으로 변경
setInterval(changeBackground, 5000);
