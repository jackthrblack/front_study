function fun1(){
    console.log('alertFunction')
}

const ele2 = document.getElementById('id2');
ele2.addEventListener('click',function(){
    console.log('id2등장')
    const result = confirm('컨펌할수있습니다.')
    if(result){
        console.log("확인을누르셨네요")
    }else{
        console.log("취소를누르셨네요")
    }
})

const ele3 = document.getElementById('id3');
ele3.addEventListener('click',fun2);
function fun2(){
    console.log('promptFunction')
    const result = prompt('프롬프트할수있습니다.')
    console.log(result);
}