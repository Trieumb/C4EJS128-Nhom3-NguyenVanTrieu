function checkTime(i) 
{
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function getTime(){

    let today = new Date();

    let d = today.getDay();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();

    m = checkTime(m);
    s = checkTime(s);

    switch (d) {
        case 0:
            document.getElementById("weekday").innerHTML = "SUN";
            break;
        case 1:
            document.getElementById("weekday").innerHTML = "MON";
            break;
        case 2:
            document.getElementById("weekday").innerHTML = "TUE";
            break;
        case 3:
            document.getElementById("weekday").innerHTML = "WED";
            break;
         case 4:
            document.getElementById("weekday").innerHTML = "THU";
            break;
        case 5:
            document.getElementById("weekday").innerHTML = "FIR";
            break;
        case 6:
            document.getElementById("weekday").innerHTML = "SAT";
            break;
        default:
            break;
    }
    document.getElementById("hours").innerHTML = h;
    document.getElementById("minutes").innerHTML = m;
    document.getElementById("seconds").innerHTML = s;  

    let t = setTimeout(function () { getTime();}, 500);

}

