let gelir = Number(prompt("Kredi Kontrolü için gelirinizi giriniz"));
let gider = Number(prompt("Giderinizi giriniz"));
let asgariÜcret = 5500;
let fark = gelir-gider;

fark >= asgariÜcret ? alert("Kredi talebiniz kabul edilmiştir") : alert("MAALESEF!!! Kredi talebiniz kabul edilmemiştir");
