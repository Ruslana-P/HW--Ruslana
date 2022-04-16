console.log ('..........#4 Упрощенный вариант')
function exersice4Easier (a, b){
    if (a>b){
        return;
    }
    console.log(a);
    exersice4Easier(a + 1, b);
}

console.log ('..........#4 Усложненный вариант')
function exersice4Easier (a, b){
    if (a<b){
        console.log(a);
        exersice4Easier(a + 1, b);
    }
    else {
        console.log(a);
        if (a==b) {
            return;
        }
        exersice4Easier(a-1, b)
    }
}
exersice4Easier(5,1)


console.log('..........#5')

var showTime = async () => { while (true) {
    // (B1) UPDATE CURRENT TIME
    let now = new Date();
    let hr = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();
    document.getElementById("timeNow").innerHTML = `${hr}:${min}:${sec}`;

    await new Promise(resolve => setTimeout(resolve, 1000));
}};

    showTime();


/* Я намагалась зробити цю задачку по іншому, але у мене виходить. Я намагаль також виводи в консоль, щоб подивитись
 чи працює фінкція. Консоль виводиться кожну секунду але значення не оновлюється. Я не розумію чому

let today = new Date();
function time(todayNow) {
    let hours = todayNow.getHours();
    let minutes = todayNow.getMinutes();
    let seconds = todayNow.getSeconds();
    let newVar = '' + hours + ':' + minutes + ':' + seconds;
    document.getElementById("timeNow").innerHTML = newVar;
}

let id = setInterval (function(){time(today)}, 1000);

function time(todayNow)

*/