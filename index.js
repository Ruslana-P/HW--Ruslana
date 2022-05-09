console.log ('..........#4 Упрощенный вариант')
function exersice4Easier (a, b){
    if (a>b){
        return;
    }
    console.log(a);
    exersice4Easier(a + 1, b);
}
exersice4Easier(1,5)


console.log ('..........#4 Усложненный вариант')
function exersice4Harder (a, b){
    console.log(a);
    if (a<b){
        exersice4Harder(a + 1, b);
    }
    else {
        if (a==b) {
            return;
        }
        exersice4Harder(a-1, b)
    }

}
exersice4Harder(5,1)


console.log('..........#5')

let timeNow = document.getElementById("timeNow");
function time() {
    let today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    let newVar = '' + hours + ':' + minutes + ':' + seconds;
    timeNow.innerHTML = newVar;
}

setInterval (function(){time()}, 1000);
