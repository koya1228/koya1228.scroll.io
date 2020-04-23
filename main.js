var slideItems = document.querySelectorAll('.slide-item')
//querySelectorAll:全ての要素を配列で取得
var IntervalTime = 3000
//1s=1000ms,3000ms=3s

var activeNum = 0
var MaxNum = slideItems.length - 1
//length:文字列の長さや配列の要素数を取得

// 1枚目を表示する
slideItems[0].classList.add('active')
//classList.add:指定されたクラスの値を追加

setInterval(() => {
    //アロー関数
    slideItems[activeNum].classList.remove('active')
    //classList.remove:指定されたクラスの値を除去
    if (activeNum < MaxNum) {
        activeNum = activeNum + 1
    } else {
        activeNum = 0
    }
    slideItems[activeNum].classList.add('active')
}, IntervalTime);
