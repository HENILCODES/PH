function copyCode(DATA){
    var codes = document.getElementById(DATA);
    codes.select();
    alert("d")
    navigator.clipboard.writeText(codes.value);
}
