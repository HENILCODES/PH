function reload() {
    setTimeout(load,1000);
}
function load() {
    document.getElementById("reload_page").style.display = "block";
    document.getElementById("lod_button").style.display="none";
    setTimeout(function(){ window.location = "https://henilcode.github.io/HTML/"; },1000);  
}
