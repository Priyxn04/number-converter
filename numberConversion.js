function decimalToBin(){
    let number = parseInt(document.getElementById("decimaltobin").value);
    document.getElementById("binOutput").innerHTML = number.toString(2);
}

function decimalToHex(){
    let number = parseInt(document.getElementById("decimaltohex").value);
    document.getElementById("hexOutput").innerHTML = number.toString(0x10);
}

function binaryToDecimal() {
    let number = document.getElementById("binarytodecimal").value;
    document.getElementById("decOutputFromBin").innerHTML = parseInt(number,2).toString();
}

function hexToDecimal() {
    let number = document.getElementById("hextodecimal").value;
    document.getElementById("decOutputFromHex").innerHTML = parseInt(number, 16).toString();
}