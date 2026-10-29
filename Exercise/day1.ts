//== soal no 1==
const length = 5;
const width = 3;
console.log(length*width);

//==soal no 2==

const panjang = 5;
const lebar = 3;

console.log(2*panjang+2*lebar);

//==soal no 3==
const radius = 5;
const phi = 3.14;

console.log(radius*2);// diameter = 
console.log(2*phi*radius);// circumference = 
console.log(phi*radius*radius);// area =

//==soal no 4==

const sudut1 = 80;
const sudut2 = 65;
console.log(180-sudut1-sudut2);

//==soal no 5==

let totalHari = 400;
let tahun = Math.floor(totalHari/365);
let sisaHariSetelahTahun = (totalHari%365);

let bulan = Math.floor(sisaHariSetelahTahun/30);
let hari = (sisaHariSetelahTahun%30);

console.log(`${totalHari} hari = ${tahun} tahun, ${bulan} bulan, ${hari} hari`);


//==soal no 6==

let date1 = new Date ('2022-01-20');
let date2 = new Date ('2022-01-22'); 

date1.setHours(0, 0, 0, 0);
date2.setHours(0, 0, 0, 0);

let selisihMs = Math.abs(date2-date1);// dalam milidetik

let satuHariMs = (1000*60*60*24);// milidetik dalam satu hari
let selisihHari = Math.round(selisihMs/satuHariMs);

console.log(selisihHari);
