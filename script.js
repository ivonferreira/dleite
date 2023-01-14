let menu = document.querySelector('nav#menu')
function clickMenu(){
    if (menu.style.display == 'block'){
        menu.style.display = 'none';
    }else{
        menu.style.display = 'block';
    }
}
function mudouTamanho(){
    if (window.innerWidth >=700) {
        menu.style.display = 'block';
    }else{
        menu.style.display = 'none';
    }
}