function clickMenu(){
    let menu = document.querySelector('nav#menu')
    if (menu.style.display == 'none'){
        menu.style.display = 'block';
    }else{
        menu.style.display = 'none';
    }
}