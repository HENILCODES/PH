var i = 0;
var TxT = "Hello Welcome To My Web-site Henil Code. Thank You "
function types() {
    if (i < TxT.length) {
        document.getElementById("demo").innerHTML += TxT.charAt(i);
        i++;
    }
    setTimeout(types,70);
}