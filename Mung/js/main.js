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


// 배경이미지전환
var myImage=document.getElementById("bg_2");
var imageArray=["../../images/dog.jpg","../../images/dog_2.jpg","../../images/dog_4.jpg","../../images/dog_5.jpg"];
var imageIndex=0;

function changeImage(){
	myImage.setAttribute("src",imageArray[imageIndex]);
	imageIndex++;
	if(imageIndex>=imageArray.length){
		imageIndex=0;
	}
}
setInterval(changeImage,3000);