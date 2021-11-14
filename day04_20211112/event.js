
const ele1 = document.getElementById('id2');
    // 익명함수
    // ele1.addEventListener('click', function()
    // {
    //     console.log('id2가 지정된 요소 클릭됨');
    // }
    // );

    // id2 요소를 클릭했을 때 fun2 함수 호출
    ele1.addEventListener('click', fun2);

    function fun2(){
        console.log("fun2 함수 호출");
    }

    function fun1(){
        console.log('함수 호출됨')
    }