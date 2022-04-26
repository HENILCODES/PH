function copyCode(DATA){
    var codes = document.getElementById(DATA);
    codes.select();
    navigator.clipboard.writeText(codes.value);
}