document.oncontextmenu = function tarun1(e) {
    e.preventDefault();
    
    var tarun2 = document.getElementById("context_menu");
        tarun2.style.display = 'block';
        tarun2.style.left = e.pageX + "px";
        tarun2.style.top = e.pageY + "px";
}