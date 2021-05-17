//자동슬라이드 이미지
// $(document).ready(function(){ 
// 	$('#bg').bxSlider({ 
// 		auto: true, 
// 		speed: 500, 
// 		pause: 4000,
// 		mode:'fade',
//         // 오른쪽왼쪽 버튼 표시
//         controls: false, 
//         infiniteLoop: true,
// 		// 시작 중지 버튼을 표시
// 		autoControls: false, 
// 		//페이지 바로가기 버튼을 표시
// 		pager:false, 
// 	});
// });


// 배경이미지전환
var myImage=document.getElementById("bg");
var imageArray=["./images/dog.jpg","./images/dog_2.jpg","./images/dog_4.jpg","./images/dog_5.jpg"];
var imageIndex=0;

function changeImage(){
	myImage.setAttribute("src",imageArray[imageIndex]);
	imageIndex++;
	if(imageIndex>=imageArray.length){
		imageIndex=0;
	}
}
setInterval(changeImage,3000);