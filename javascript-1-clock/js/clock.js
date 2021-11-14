
var userName = prompt("Name: ");
document.querySelector("#myName").innerHTML = userName;

 

function showTime(){
    var tarih = new Date();
    var date = tarih.getDate();
    var hour = tarih.getHours();
    var min = tarih.getMinutes();
    var sec = tarih.getSeconds();

    sec = sec < 10 ? "0" + sec : sec;
    min = min < 10 ? "0" + min : min;
    hour = hour < 10 ? "0" + hour : hour;


    document.querySelector("#myClock").innerHTML = hour + ":" + min + ":" + sec;

    setInterval(showTime, 1000);

}



showTime();