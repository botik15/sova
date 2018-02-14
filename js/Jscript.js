var smoothJumpUp = function() {
    if (document.body.scrollTop>0 || document.documentElement.scrollTop>0) {
        window.scrollBy(0,-50);
        setTimeout(smoothJumpUp, 20);
    }
}



//Функция показа
function show(state)
{
document.getElementById('window').style.display = state;
document.getElementById('wrap').style.display = state;
}	