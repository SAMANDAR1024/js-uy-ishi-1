//////////////////////////////////////////////////////////////////////////////////////////////////////// 1111

// function vaqtHisobi(ism, tugilganSana) {
//     const sanaBugungi = new Date();
//     const sana = new Date(tugilganSana);

//     let yilFarqi = sanaBugungi.getFullYear() - sana.getFullYear();
//     let oyFarqi = sanaBugungi.getMonth() - sana.getMonth();
//     let kunFarqi = sanaBugungi.getDate() - sana.getDate();

//     if (kunFarqi < 0) {
//         oyFarqi--;
//         kunFarqi += new Date(sanaBugungi.getFullYear(), sanaBugungi.getMonth(), 0).getDate();
//     }

//     if (oyFarqi < 0) {
//         yilFarqi--;
//         oyFarqi += 12;
//     }

//     const soat = sanaBugungi.getHours();
//     const minut = sanaBugungi.getMinutes();
//     const sekund = sanaBugungi.getSeconds();

//     return `${ism}, siz ${yilFarqi} yil, ${oyFarqi} oy, ${kunFarqi} kun, ` +
//            `${soat} soat, ${minut} minut va ${sekund} sekund yashadingiz.`;
// }

// const ism = prompt("Ismingizni kiriting:");
// const sana = prompt("Tug'ilgan sanangizni 'YYYY-MM-DD' shu holda kiriting kiriting:");

// const natija = vaqtHisobi(ism, sana);
// console.log(natija);
// alert(natija);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////// 2222

// (function() {
//     const son1 = parseInt(prompt("1-sonni kiriting:"), 10);
//     const son2 = parseInt(prompt("2-sonni kiriting:"), 10);

//     const past = Math.min(son1, son2);
//     const top = Math.max(son1, son2);

//     function tasodifiySon(top, past) {
//         return Math.floor(Math.random() * (top - past + 1)) + past;
//     }

//     const natija = tasodifiySon(top, past);
//     alert(`Tasodifiy son: ${natija}`);
// })();

///////////////////////////////////////////////////////////////////////////////////////////////////////// 

/////////////////////////////////////////////////////////////////////////////////////////////////////////// 3333

// function sozz(jumla) {
//     return jumla
//         .split(' ')
//         .map(soz => soz.charAt(0).toUpperCase() + soz.slice(1).toLowerCase())
//         .join(' ');
// }

// let jumla = prompt("Biror jumla kiriting:");

// let natija = sozz(jumla);
// console.log(natija);
// alert(natija);

///////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////// 4444

// function Kharf (jumla) {
//     let sanash = 0;

//     for (let i = 0; i < jumla.length; i++) {
//         let belgi = jumla.charAt(i);
//         if (belgi >= 'A' && belgi <= 'Z') {
//             sanash++;
//         }
//     }

//     return sanash;
// }

// let jumla = prompt("Biror jumla kiriting:");

// let natija = Kharf (jumla);
// console.log(`Jumlada ${natija} ta katta harf bor.`);
// alert(`Jumlada ${natija} ta katta harf bor.`);


///////////////////////////////////////////////////////////////////////////////////////////////////////////