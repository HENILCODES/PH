function fact() {
    var Number = document.getElementById('Num').value;
    var Ans = document.getElementById('answer');
    var Fact = 1;
    for (let i = 1; i <= Number; i++) {
        Fact = Fact * i;
    }
    Ans.innerHTML = Fact;
}