// var d = {
//     "birthdays": [
//         {"Signes birthday": "2015-02-22T22:11:00.000Z"},
//         {"desmond": "2009-04-04T03:42:00.000Z"},
//         {"jenny": "1980-01-01"},
//         {"jonas": "1980-05-16"}
//     ],
//     "anniversaries": [{"First date": "2005-07-03T18:15:00.000Z"}]
// };

var anniversaries = [
    {"2015-02-22T22:11:00.000Z": "Signes birthday"},
    {"2009-04-04T03:42:00.000Z": "Desmonds birthday"},
    {"2005-07-03T18:15:00.000Z": "Jonas & Jenny´s first date"},
    {"2011-11-05T18:00:00.000Z": "Jonas & Jenny´s wedding day"},
    {"1980-01-01T07:30:00.000Z": "Jenny´s birthday"},
    {"1980-05-16T07:30:00.000Z": "Jonas birthday"},
];


var now = new Date();

now.setFullYear(now.getFullYear() + 1);

for(var o in anniversaries){
    console.log(o);
}
anniversaries.forEach(function(element) {
    console.log(element);
}, this);

console.log(now);

// d.anniversaries.forEach