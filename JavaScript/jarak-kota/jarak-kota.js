const totaljarakKota = () => {
    var goldDrogerBay = 39; 
    var bogor = 30;
    var totaljarak = goldDrogerBay + bogor;
    
    console.log("ini jarak kotanya :", totaljarak);
}

totaljarakKota();

const hitungTinggiBan = () => {
    var lebar = 90; 
    var ratio = 80;
    var tinggi = lebar * (ratio/100); 

    console.log("ini tinggi bannya:",tinggi); 
}

hitungTinggiBan();

const totalDiameter = () => {
    var velg = 14;
    var inch = 25.4;
    var  tinggi = 144;
    var totalDiameter = velg * inch + tinggi; 

    console.log("ini total diameternya;",totalDiameter);
}

totalDiameter();

const kelilingBan =() => {
    var phi = 3.14;
    var diameter = 14; 
    var inch = 25.4;
    tinggi = 72;
    var kelilingBan = (tinggi*2) + inch * diameter;

    console.log("ini keliling ban:",kelilingBan);
}

kelilingBan();

const konversiDiameterBan = () => {
    var totalDiameter = 499.6 + 1000;

    console.log("ini konversi diameterbannya:",totalDiameter);
}

konversiDiameterBan();

const konversiTotalJarak = () => {
    var totaljarak = 69 * 1000;

    console.log("ini konversi total jaraknya:",totaljarak);
}

konversiTotalJarak();

const totalPutaranRoda = () => {
    var totaljarak = 69000;
    var kelilingBan = 15678;
    var totalPutaranRoda = totaljarak / kelilingBan;

    console.log("ini total putaran roda yang di butuhkan;",totalPutaranRoda); 
}
 
totalPutaranRoda();