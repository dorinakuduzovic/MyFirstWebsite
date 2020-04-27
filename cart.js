function increaseValue(n) {
    var value = document.getElementById('number' + n).value;
    value++;
    document.getElementById('number' + n).value = value;
}

function decreaseValue(n) {
    var value = document.getElementById('number' + n).value;
    if (value > 0)
        value--;
    document.getElementById('number' + n).value = value;
}