

function fun1(){
    console.log('alertFunction')
}

const ele2 = document.getElementById('id2');
ele2.addEventListener('click',function(){
    console.log('id2 버튼 클릭');
    const result = confirm("컨펌할수있습니다.");
    if(result){
        console.log("확인을 누르셨네요");
    }else {
        console.log("취소를 누르셨네요");
    }
});

console.log("ele2의 값:",ele2);

const elel3 = document.getElementById('id3');

elel3.addEventListener('click',fun2);
function fun2(){
    console.log("promptFunction")
    const result = prompt("프롬프트함수입니다");
    console.log(result);
}

