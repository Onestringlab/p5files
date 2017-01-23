var angkaTebak;
var angkaAda;
var posisiTepat;
var button;
var textField
var tebakan;
var jumlahTebakan = 0;
var temp

function setup() {
    noCanvas();
    angkaTebak = str(floor(random(100, 999)));
    console.log(angkaTebak);

    button = select("#btnTebak");
    button.mousePressed(prosesTebak);
    // console.log(angkaTebak.length);
}

function prosesTebak() {
    angkaAda = 0;
    posisiTepat = 0;
    temp = -1;
    textField = select("#fieldTebak");
    tebakan = textField.value();
    // console.log(textField.value());
    for (var i = 0; i < angkaTebak.length; i++) {
        for (var j = 0; j < angkaTebak.length; j++) {
            // console.log(angkaTebak[i]);
            // console.log(tebakan[j]);
            if (angkaTebak[i] == tebakan[j] && temp != tebakan[j]) {
                if (angkaAda < angkaTebak.length) angkaAda++;
                temp = tebakan[j];
            }
            if (angkaTebak[i] == tebakan[j]) {
                if (i == j) posisiTepat++;
            }
            console.log(temp);
        }
    }
    if (angkaTebak != tebakan) {
        jumlahTebakan++;
        createP(jumlahTebakan + ". Pada angka tebakan " + tebakan + ", terdapat " + angkaAda + " angka benar dengan " + posisiTepat + " posisi tepat");
    } else {
        createP(angkaTebak + ", Tebakan Tepat! Tekan Refresh Untuk Bermain Lagi!");
    }
    textField.value("");
    // textField.setFocus(true);
    // console.log(angkaAda);
}
