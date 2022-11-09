window.addEventListener('DOMContentLoaded',init,false);

function init() {
    var buttons = document.getElementsByTagName("button")
    buttons[0].addEventListener('click', darkMode,false)
    buttons[1].addEventListener('click', lightMode, false)
    buttons[2].addEventListener('click', randMode, false)
}

function darkMode() {
    var body = document.getElementsByTagName("body")[0]
    var head = document.getElementsByTagName("header")[0]
    var menu = document.getElementsByClassName("menu")[0]
    var foot = document.getElementsByTagName("footer")[0]
    var footLine = document.getElementsByClassName("footer-line")[0]
    var button = document.getElementsByClassName("button")
    var hint = document.getElementsByClassName("darkHint")[0]
    var li = document.getElementsByTagName("li")
    var a = []
    var hr = document.getElementsByTagName("hr")
    body.style.color = "white"
    body.style.backgroundColor = "rgb(80, 80, 80)"
    head.style.backgroundColor = "rgb(50,50,50)"
    head.style.color="white"
    menu.style.backgroundColor = "orange"
    foot.style.backgroundColor = "rgb(50,50,50)"
    footLine.style.backgroundColor = "orange"
    for (var i = 0, length = button.length; i < length; i++) {
        button[i].style.backgroundColor = "orange"
    }
    hint.innerHTML="Click light mode button to go back to the light mode ヾ(✿ﾟ▽ﾟ)ノ"
    for(var i = 0; i < hr.length; i++){
        hr[i].style.borderTop = "1px solid #eee"
        hr[i].style.borderBottom = "1px solid #999"
    }
    for (var i = 0; i < li.length; i++) {
        // get <a> inside <li>
        // https://stackoverflow.com/questions/20830677/javascript-get-h2-tag-inside-li-tag-and-return-it
        a = li[i].getElementsByTagName('a')[0];
        a.style.color = "brown"
    }

}

function lightMode() {
    var body = document.getElementsByTagName("body")[0]
    var head = document.getElementsByTagName("header")[0]
    var menu = document.getElementsByClassName("menu")[0]
    var foot = document.getElementsByTagName("footer")[0]
    var footLine = document.getElementsByClassName("footer-line")[0]
    var button = document.getElementsByClassName("button")
    var hint = document.getElementsByClassName("darkHint")[0]
    var li = document.getElementsByTagName("li")
    var a = []
    var hr = document.getElementsByTagName("hr")
    body.style.color = "black"
    body.style.backgroundColor = "rgb(232, 232, 232)"
    head.style.backgroundColor = "rgb(144, 134, 134)"
    head.style.color="black"
    menu.style.backgroundColor = "rgb(255, 223, 123)"
    foot.style.backgroundColor = "rgb(134, 134, 134)"
    footLine.style.backgroundColor = "rgb(255, 223, 123)"
    for (var i = 0, length = button.length; i < length; i++) {
        button[i].style.backgroundColor = "rgb(255, 223, 123)"
    }
    hint.innerHTML="Click dark mode button to switch to the dark mode ✿✿ヽ(°▽°)ノ✿"
    for(var i = 0; i < hr.length; i++){
        hr[i].style.borderTop = "1px solid #999"
        hr[i].style.borderBottom = "1px solid #eee"
    }
    for (var i = 0; i < li.length; i++) {

        a = li[i].getElementsByTagName('a')[0];
        a.style.color = "brown"
    }
}

function randMode(){
    var body = document.getElementsByTagName("body")[0]
    var head = document.getElementsByTagName("header")[0]
    var menu = document.getElementsByClassName("menu")[0]
    var foot = document.getElementsByTagName("footer")[0]
    var footLine = document.getElementsByClassName("footer-line")[0]
    var button = document.getElementsByClassName("button")
    var hint = document.getElementsByClassName("darkHint")[0]
    var li = document.getElementsByTagName("li")
    var a = []
    var hr = document.getElementsByTagName("hr")
    function randRGB(){
        var r = Math.floor(Math.random() * 256)
        var g = Math.floor(Math.random() * 256)
        var b = Math.floor(Math.random() * 256)
        return 'rgb(' + r + ',' + g + ',' + b + ')'
    }
    function randDark(){
        var r = Math.floor(Math.random() * 80)
        var g = Math.floor(Math.random() * 80)
        var b = Math.floor(Math.random() * 80)
        return 'rgb(' + r + ',' + g + ',' + b + ')'
    }
    function randLight(){
        var r = Math.floor(Math.random() * 106)+150
        var g = Math.floor(Math.random() * 106)+150
        var b = Math.floor(Math.random() * 106)+150
        return 'rgb(' + r + ',' + g + ',' + b + ')'
    }

    var bodyCol = randRGB()

    body.style.backgroundColor = bodyCol
    var hrLight = randLight()
    var hrDark = randDark()
    if(bodyCol.length < 14){
        // if the bg color of body is dark, the color of text and hr is light
        body.style.color = randLight()

        for(var i = 0; i < hr.length; i++){
            hr[i].style.borderTop = "1px solid " + hrLight
            hr[i].style.borderBottom = "1px solid " + hrDark
        }
    }
    else {
        body.style.color = randDark()

        for(var i = 0; i < hr.length; i++){
            hr[i].style.borderTop = "1px solid " + hrDark
            hr[i].style.borderBottom = "1px solid " + hrLight
        }
    }
    var headCol = randRGB()
    head.style.backgroundColor =  foot.style.backgroundColor = headCol
    if(headCol.length < 14)
        head.style.color = randLight()
    else
        head.style.color = randDark()

    var menuCol =  randRGB()
    menu.style.backgroundColor = footLine.style.backgroundColor = menuCol
    if(menuCol.length < 14){
        var aCol = randLight()
        for (var i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName('a')[0];
            a.style.color = aCol
        }
    }
    else{
        var aCol = randDark()
        for (var i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName('a')[0];
            a.style.color = aCol
        }
    }

    var buttonCol = randLight()
    var buttonTextCol = randDark()
    for (var i = 0, length = button.length; i < length; i++) {
        button[i].style.backgroundColor = buttonCol
        button[i].style.color = buttonTextCol
    }
    hint.innerHTML="You are so brave to attempt this mode Σ(⊙▽⊙)"

}
