const name: string = "BudiB World"; 
const name2: string = "Ucok";

console.log(name.toLowerCase());
console.log(name.toUpperCase());
console.log(name.replace("B","P"));
console.log(name.concat(" ").concat(name2));
console.log(name + " " + name2);
console.log(name.slice(0,3));
console.log(name.split (" "));

//

const welcome: string = "welcome";
const name3 : string = "Jack";

console.log(welcome + "," + name3);
console.log(`${welcome},${name3}`)


//====number build in menthod=======

const angka: string = "4000";
console.log(angka);
console.log(Number(angka));
console.log(parseInt(angka));

//======string conversion=====

const angka2: number = 3000;
console.log(angka2);
console.log(String(angka2));
console.log(angka2.toString());

//==========boolean conversion=============


console.log(Boolean(300));
console.log(Boolean(-100));
console.log(Boolean(0));
console.log(Boolean("Budi"));
console.log(Boolean(" "));
console.log(Boolean(""));
console.log(Boolean("false"));
console.log(Boolean("0"));


//==============DATE============
const now = new Date();
console.log(now);
console.log(now.getFullYear());
console.log(now.getMonth()+1);
console.log(now.getDate());
console.log(now.getMinutes());

//====basic operator===========
/*
+ -> pertambahan
- ->pengurangan
* -> perkalian
/ -> pembagian
% -> modulo (sisa bagi)
** -> pangkat

*/

console.log(1 + 1);
console.log(3-1);
console.log(3*1);
console.log(3/1);
console.log(11%10);
console.log(3**3);

//====modify in place======

let n: number = 4
n += 2; //n = n + 2
console.log(n);


//=======Increment & Decrement============
let counter: number = 1;

counter++; // increment

console.log(counter);

counter--; //decrement

console.log(counter);

///======comparison operator================

/*
==
===
<
>
<=
>=
*/

//console.log(2 =="2"); pengecekan di value saja
//console.log(2 ==="2"); pengecekan di value dan tipe data

console.log(2 < 5);
console.log(5 < 5);
console.log(5 > 5);
console.log(10 >= 10);
console.log(1 <= 10);


//=====MATH=====

console.log(Math.ceil(4.2)); //memblatkan angka keatas
console.log(Math.floor(4.7)); // Membulatkan angka kebawah
console.log(Math.round(4.3)); // membulatkan angka ke bil bulat terdekat
console.log(Math.ceil(4.7)); // membulatkan angka ke bil bulat terdekat
console.log(Math.max(4, 150, 600000, 500));
console.log(Math.min(4, 267, 700, 900, 1));
