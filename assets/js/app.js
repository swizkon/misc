// var d = {
//     "birthdays": [
//         {"Signes birthday": "2015-02-22T22:11:00.000Z"},
//         {"desmond": "2009-04-04T03:42:00.000Z"},
//         {"jenny": "1980-01-01"},
//         {"jonas": "1980-05-16"}
//     ],
//     "anniversaries": [{"First date": "2005-07-03T18:15:00.000Z"}]
// };

var now = new Date();
// now.setHours(1);

var anniversaries =
    {
        "2015-02-22T22:11:00.000Z": "Signes birthday",
        "2009-04-04T03:42:00.000Z": "Desmonds birthday",
        "2005-07-03T18:15:00.000Z": "J+J first date",
        "2011-11-05T18:00:00.000Z": "J+J wedding day",
        "1980-06-01T12:00:00.000Z": "Jenny´s birthday",
        "1980-05-16T12:00:00.000Z": "Jonas birthday"
    };

var sorted = [];

var tempDate;
var tempAniversaryCount;
for (var anniversary in anniversaries) {
    tempAniversaryCount = 0;
    tempDate = new Date(anniversary);
    while (tempDate.getTime() < now.getTime()) {
        tempAniversaryCount += 1;
        tempDate.setFullYear(tempDate.getFullYear() + 1);
    }
    sorted[sorted.length] = {
        "title": anniversaries[anniversary],
        "original": anniversary,
        "next": tempDate.toJSON(),
        "count": tempAniversaryCount
    };
}
sorted.sort(function (a, b) {
    return new Date(a.next).getTime() - new Date(b.next).getTime();
});

var a = moment(now);
var b = moment(sorted[0].next);
var days = b.diff(a, 'days');
var sss = (days == 0) ? "Today!"
        : (days == 1) ? "Tomorrow"
        : days + " days from now";

document.querySelector("#next-title").textContent = sorted[0].title;

document.querySelector("#num-days").textContent = sss;



var upcoming = "";
for(var i = 1 ; i < 3 ; i++){
    upcoming += "<h4>" + sorted[i].title + " <small>" + moment(sorted[i].next).diff(a, 'days') + " days</small></h4>";
}
document.querySelector("#upcoming").innerHTML = upcoming;
